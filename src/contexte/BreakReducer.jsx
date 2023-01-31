const BreakReducer = (state, action) => {
  switch (action.type) {
    case "GET_ACTEURS":
      return {
        ...state,
        acteurs: action.payload,
        // loading: false,
      };
    case "GET_ACTEUR":
      return {
        ...state,
        acteur: action.payload,
        // loading: false,
      };
    case "GET_FOLLOWERS":
      return {
        ...state,
        followers: action.payload,
      };
    case "GET_FOLLOWING":
      return {
        ...state,
        following: action.payload,
      };
    case "REMOVE_ACTEUR":
      return {
        ...state,
        acteur: {},
      };
    case "GET_ACTNAME":
      return {
        ...state,
        acteurNom: action.payload,
        // loading: false,
      };
    case "REMOVE_NOMACTEUR":
      return {
        ...state,
        acteurNom: {},
      };
    default:
      throw new Error();
  }
};

export default BreakReducer;
