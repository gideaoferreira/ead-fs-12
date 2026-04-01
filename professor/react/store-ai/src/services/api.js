/**
 * API Service module
 * Handles all HTTP requests and API calls
 * Business logic for API interactions
 */

/**
 * Generic fetch wrapper for API calls
 * @param {string} url - The API endpoint URL
 * @param {object} options - Fetch options
 * @returns {Promise} API response
 */
export const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

/**
 * GET request
 * @param {string} url - The API endpoint URL
 * @returns {Promise} API response
 */
export const get = (url) => apiCall(url, { method: 'GET' });

/**
 * POST request
 * @param {string} url - The API endpoint URL
 * @param {object} data - Request body data
 * @returns {Promise} API response
 */
export const post = (url, data) =>
  apiCall(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

/**
 * PUT request
 * @param {string} url - The API endpoint URL
 * @param {object} data - Request body data
 * @returns {Promise} API response
 */
export const put = (url, data) =>
  apiCall(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

/**
 * DELETE request
 * @param {string} url - The API endpoint URL
 * @returns {Promise} API response
 */
export const deleteRequest = (url) => apiCall(url, { method: 'DELETE' });
