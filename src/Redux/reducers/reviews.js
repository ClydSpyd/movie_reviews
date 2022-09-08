const initialState = [];

const reviews = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_REVIEW":
      return [...state, payload];

    case "DELETE_REVIEW":
      const deleteIdx = state.findIndex((item) => item.movieData.id === payload);
      if (deleteIdx === -1) return state;
      return [...state.slice(0, deleteIdx), ...state.slice(deleteIdx + 1)];

    case "EDIT_REVIEW":
      const editIdx = state.findIndex((item) => item.movieData.id === payload.movieData.id);
      console.log(editIdx)
      if (editIdx === -1) return state;
      return [...state.slice(0, editIdx), payload, ...state.slice(editIdx + 1)];

    default:
      return state;
  }
};

export default reviews;
