import SimpleMarkdown from 'simple-markdown';
import rules from './rules';

/**
 * @param {string} text
 * @returns {null|object}
 */
export function parse(text) {
  if (!text) {
    return null;
  }
  return SimpleMarkdown.parserFor(rules)(text, {inline: false});
}