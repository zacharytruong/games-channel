const initialState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: []
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames
      };
    default:
      return { ...state };
  }
};

// ACTIONS

export default gameReducer;
