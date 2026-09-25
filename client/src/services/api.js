const API_BASE = '/api';

/**
 * Generic API request wrapper with desi error handling
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const res = await fetch(url, config);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(
        data.message || 'Server ne thoda attitude dikha diya 😭'
      );
      error.statusCode = res.status;
      error.bhaiRoast = data.bhaiRoast;
      throw error;
    }

    return data;
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      const networkError = new Error('Internet bhi aaj MCQ de raha hai kya? 😂 Network disconnected!');
      networkError.isNetwork = true;
      throw networkError;
    }
    throw err;
  }
}

export const api = {
  getTopics: () => request('/topics'),

  startQuiz: ({ topic = 'mixed', difficulty = 'mixed', count = 10, mode = 'practice' }) => {
    const params = new URLSearchParams({ topic, difficulty, count: count.toString(), mode });
    return request(`/quiz/questions?${params.toString()}`);
  },

  submitAnswer: ({ sessionId, questionId, selectedOptionId, timeSpentMs = 0 }) => {
    return request('/quiz/answer', {
      method: 'POST',
      body: JSON.stringify({ sessionId, questionId, selectedOptionId, timeSpentMs }),
    });
  },

  finishQuiz: ({ sessionId }) => {
    return request('/quiz/finish', {
      method: 'POST',
      body: JSON.stringify({ sessionId }),
    });
  },

  getStats: () => request('/quiz/stats'),
};

export default api;
