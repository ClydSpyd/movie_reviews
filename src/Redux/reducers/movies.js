const initialState = [];

const movies = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_MOVIES":
      return payload;

      default:
        return state;
  }
};

export default movies;