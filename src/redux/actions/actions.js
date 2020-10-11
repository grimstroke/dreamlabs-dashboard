export const toggleProfileContent = () => ({
  type: 'TOGGLE_PROFILE',
});
export const updateHeaderTab = (id) => ({
  type: 'UPDATE_HEADER_TAB',
  payload: {
    id,
  },
});
