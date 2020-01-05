export const type = {
  UPDATE_CREDENTIALS: "UPDATE_CREDENTIALS",
  LOGOUT: "LOGOUT"
};

export function updateCredentials(credentials) {
  return {
    type: type.UPDATE_CREDENTIALS,
    credentials
  };
}

export function logout() {
  return {
    type: type.LOGOUT
  };
}
