export const API_ROUTES = {
  USERS: '/users',
  USER: (id: number) => `/users/${id}`,
};

export const ROUTES = {
  LIST: '/',
  DETAIL: (id: number) => `/user/${id}`,
};
