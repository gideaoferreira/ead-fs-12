/**
 * Truncate text to a maximum length and add ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length of text
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};
