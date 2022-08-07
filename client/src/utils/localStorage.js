export const addUserToLocalStorage = (user, token) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem('token');
  const token = result ? JSON.parse(result) : null;
  return token;
};