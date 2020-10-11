const initialState = {
  header: {
    titles: [
      {
        id: '1',
        message: 'Monitor Center',
        isSelected: true,
      },
      {
        id: '2',
        message: 'Assessment Center',
        isSelected: false,
      },
      {
        id: '3',
        message: 'Admin',
        isSelected: false,
      },
    ],
    name: 'Nick Craig',
    showProfile: false,
    loginPopupText: 'Logged in as :-',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      return {
        header: {
          titles: state.header.titles,
          name: state.header.name,
          showProfile: !state.header.showProfile,
          loginPopupText: state.header.loginPopupText,
        },
      };
    case 'UPDATE_HEADER_TAB': {
      const headerTitles = state.header.titles.map((title) => {
        const temp = title;
        temp.isSelected = temp.id === action.payload.id;
        return temp;
      });
      return {
        header: {
          titles: headerTitles,
          name: state.header.name,
          showProfile: state.header.showProfile,
          loginPopupText: state.header.loginPopupText,
        },
      };
    }
    default:
      return state;
  }
}
