import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

/**
 * Parse markdown and sanitize the HTML output to prevent XSS.
 */
export function safeMarkdown(input: string): string {
    const raw = marked.parse(input) as string;
    return DOMPurify.sanitize(raw);
}
