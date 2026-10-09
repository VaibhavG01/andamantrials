// client/src/api/apiClient.js
// ─────────────────────────────────────────────────────────────────────────────
// High-Performance API Client with In-Memory Caching & Request Deduplication

const BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

// In-memory cache for GET queries
const apiCache = new Map();
// In-flight promise deduplication
const inFlightRequests = new Map();

// Default cache TTL: 45 seconds
const DEFAULT_TTL_MS = 45 * 1000;

export const clearApiCache = () => {
  apiCache.clear();
};

export const apiClient = async (endpoint, options = {}) => {
  const method = (options.method || 'GET').toUpperCase();
  const isGet = method === 'GET';
  const token = localStorage.getItem('andaman_token');

  const cacheKey = `${endpoint}_${token || 'guest'}`;

  // Cache hit for GET requests
  if (isGet && !options.noCache) {
    const cached = apiCache.get(cacheKey);
    if (cached && cached.expiry > Date.now()) {
      return cached.data;
    }

    // In-flight deduplication: return active promise if already pending
    if (inFlightRequests.has(cacheKey)) {
      return inFlightRequests.get(cacheKey);
    }
  } else if (!isGet) {
    // Invalidate related cache on mutations (POST, PUT, DELETE)
    apiCache.clear();
  }

  const headers = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const fetchPromise = (async () => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      // Store successful GET responses in cache
      if (isGet && !options.noCache) {
        apiCache.set(cacheKey, {
          data,
          expiry: Date.now() + (options.ttlMs || DEFAULT_TTL_MS),
        });
      }

      return data;
    } catch (error) {
      console.warn(`[API Client Offline Fallback] ${endpoint}:`, error.message);
      throw error;
    } finally {
      if (isGet) {
        inFlightRequests.delete(cacheKey);
      }
    }
  })();

  if (isGet && !options.noCache) {
    inFlightRequests.set(cacheKey, fetchPromise);
  }

  return fetchPromise;
};

export default apiClient;
