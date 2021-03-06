export const initState = {
  articles: []
};

export const articleReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
};
