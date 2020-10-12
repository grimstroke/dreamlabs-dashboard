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
  dashboardHeader: {
    title: 'Results',
    export: 'export CSV',
    newMonitor: 'create new monitor',
    monitors: {
      text: 'monitors',
      value: 134,
    },
    newMatches: {
      text: 'new Matches',
      value: 6,
    },
    watchlistAdditions: {
      text: 'watchlist Additions',
      value: 12,
    },
    transfers: {
      text: 'transfers',
      value: 23,
    },
    newAssignments: {
      text: 'new Assignments',
      value: 2,
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      return {
        ...state,
        header: {
          titles: state.header.titles,
          name: state.header.name,
          showProfile: !state.header.showProfile,
          loginPopupText: state.header.loginPopupText,
        },
      };
    case 'UPDATE_HEADER_TAB': {
      const headerTitles = state.header.titles
        ? state.header.titles.map((title) => {
            const temp = title;
            temp.isSelected = temp.id === action.payload.id;
            return temp;
          })
        : [];
      return {
        ...state,
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
