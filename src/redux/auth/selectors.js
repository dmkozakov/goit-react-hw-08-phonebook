export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.selectIsRefreshing;
export const selectError = state => state.auth.error;
