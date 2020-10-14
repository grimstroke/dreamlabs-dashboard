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
      country: 'UK',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      status: false,
      isHidden: false,
    },
    {
      created: '5 Feb',
      type: 'organization',
      name: 'Na Mo',
      country: 'India',
      match: 45,
      'match status': 'none',
      'Risk Level': 'Low',
      'watch List': ['S'],
      'PEP Class': ['1'],
      'Assign To': 'Juliet',
      supervisor: 'Juliet',
      status: false,
      isHidden: false,
    },
    {
      created: '31 Aug',
      type: 'company',
      name: 'Greek',
      country: 'Olympus',
      match: 45,
      'match status': 'none',
      'Risk Level': 'lowest',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      status: false,
      isHidden: false,
    },
    {
      created: '26 nov',
      type: 'person',
      name: 'Delex Pandian',
      country: 'India',
      match: 45,
      'match status': 'none',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      status: false,
      isHidden: false,
    },
    {
      created: '26 Dec',
      type: 'company',
      name: 'Will Smith',
      country: 'USA',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Julie Sanders',
      status: true,
      isHidden: false,
    },
    {
      created: '1 Jan',
      type: 'organization',
      name: 'Nathan Drake',
      country: 'Ireland',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'Low',
      'watch List': ['S'],
      'PEP Class': ['1', '2'],
      'Assign To': 'Justin trudeau',
      supervisor: 'Donal Trump',
      status: true,
      isHidden: false,
    },
    {
      created: '10 Apr',
      type: 'god',
      name: 'Kratos',
      country: 'Olympus',
      match: 45,
      'match status': 'potential',
      'Risk Level': 'High',
      'watch List': ['F&P'],
      'PEP Class': ['3'],
      'Assign To': 'Julie Sanders',
      supervisor: 'Nikolai Tesla',
      status: true,
      isHidden: false,
    },
    {
      created: '12 May',
      type: 'god',
      name: 'zeus',
      country: 'Hell',
      match: 45,
      'match status': 'No Match',
      'Risk Level': 'Lowest',
      'watch List': ['S', 'F&P', 'W'],
      'PEP Class': ['1', '2', '3'],
      'Assign To': 'Harley McLean',
      supervisor: 'Brad Pitt',
      status: true,
      isHidden: false,
    },
  ],
  toggleHeader: 'toggle headers',
  filterTitle: 'Filters',
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
