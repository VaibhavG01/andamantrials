// client/src/api/filmService.js
// ─────────────────────────────────────────────────────────────────────────────
// Film Chapters API Service Layer

import { apiClient } from './apiClient';

export const filmService = {
  getChapters: async () => {
    return apiClient('/film-chapters');
  },
};
