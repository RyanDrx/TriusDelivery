#!/usr/bin/env node
/**
 * Regenerates public/states/coverage-states.json, the boundary file drawn by
 * src/components/InteractiveCoverageMap.astro.
 *
 * Source data: US Census Bureau Cartographic Boundary Files, states at
 * 1:20,000,000 scale (cb_2018_us_state_20m), converted to GeoJSON. The full
 * file used to live in this repo as public/states/geojson20m.json (~644 KB,
 * pretty-printed) and was removed once this script existed; download it again
 * from https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html
 * (or any GeoJSON conversion of it) if the coverage states ever change.
 *
 * What this does:
 *   1. keeps only the features whose properties.NAME is a coverage state
 *      (must match the top-level keys of `coverageData` in the component),
 *   2. drops every property except NAME,
 *   3. rounds coordinates to 4 decimal places (~11 m, far finer than the
 *      1:20m source resolution),
 *   4. writes minified JSON.
 *
 * Usage:
 *   node scripts/filter-coverage-geojson.mjs [path/to/full-states.geojson]
 *   (defaults to public/states/geojson20m.json)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INPUT = path.resolve(process.argv[2] ?? path.join(ROOT, 'public/states/geojson20m.json'));
const OUTPUT = path.join(ROOT, 'public/states/coverage-states.json');

// Keep in sync with `coverageData` keys in src/components/InteractiveCoverageMap.astro
const COVERAGE_STATES = new Set(['Washington', 'Oregon', 'Idaho', 'Montana', 'California']);
const DECIMALS = 4;

if (!fs.existsSync(INPUT)) {
    console.error(`Input file not found: ${INPUT}\nSee the header of this script for where to download it.`);
    process.exit(1);
}

const round = (n) => Number(n.toFixed(DECIMALS));
const roundDeep = (value) => (Array.isArray(value) ? value.map(roundDeep) : round(value));

const source = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const features = source.features
    .filter((f) => COVERAGE_STATES.has(f.properties?.NAME))
    .map((f) => ({
        type: 'Feature',
        properties: { NAME: f.properties.NAME },
        geometry: { type: f.geometry.type, coordinates: roundDeep(f.geometry.coordinates) }
    }));

const missing = [...COVERAGE_STATES].filter((name) => !features.some((f) => f.properties.NAME === name));
if (missing.length) {
    console.error(`Missing states in source file: ${missing.join(', ')}`);
    process.exit(1);
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify({ type: 'FeatureCollection', features }) + '\n');

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
console.log(`Input:  ${INPUT} (${kb(fs.statSync(INPUT).size)}, ${source.features.length} features)`);
console.log(`Output: ${OUTPUT} (${kb(fs.statSync(OUTPUT).size)}, ${features.length} features)`);
