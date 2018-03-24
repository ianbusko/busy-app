const defaultState = {
  engineers: [],
  loading: false,
  errors: {}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_ENGINEERS': {
      return {
        ...state,
        engineers: action.payload
      }
    }

    default:
      return state;
  }
}
