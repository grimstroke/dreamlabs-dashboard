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
  monitors: [
    {
      created: '26 nov',
      type: 'person',
      name: 'Duke Dilion',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      staus: true,
    },
    {
      created: '26 Dec',
      type: 'company',
      name: 'Will Smith',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      staus: true,
    },
    {
      created: '1 Jan',
      type: 'organization',
      name: 'Nathan Drake',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S'],
      'PEP Class': ['1', '2'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      staus: true,
    },
    {
      created: '10 Apr',
      type: 'god',
      name: 'Kratos',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['F&P'],
      'PEP Class': ['3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      staus: true,
    },
    {
      created: '12 May',
      type: 'god',
      name: 'zeus',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      staus: true,
    },
  ],
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
