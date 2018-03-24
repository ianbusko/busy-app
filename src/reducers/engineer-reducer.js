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

    case "FETCH_ENGINEERS_FULFILLED": {
      return {
        ...state,
        engineers: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }

    default:
      return state;
  }
}
