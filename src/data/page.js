import { client } from '@utils/sanity-client';
import { SECTIONS } from './blocks';

const PAGE_QUERY_OBJ = `{
  _id,
  slug,
  title,
  metaTitle,
  metaDescription,
  "socialImage": {
    "src": socialImage.asset->url
  },
  sections[] ${SECTIONS}
}`;

export async function fetchData() {
    if (!client) {
        console.warn('⚠️  Sanity client not available. Returning empty array for pages.');
        return [];
    }
    return await client.fetch(`*[_type == "page"] ${PAGE_QUERY_OBJ}`);
}

export async function getPageById(id) {
    if (!client) {
        console.warn('⚠️  Sanity client not available. Returning null for page.');
        return null;
    }
    return await client.fetch(`*[_type == "page" && _id == "${id}"] ${PAGE_QUERY_OBJ}`);
}
