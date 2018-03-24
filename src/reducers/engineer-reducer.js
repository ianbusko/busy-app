const defaultState = {
  engineers: [],
  engineer: {name: '', email: '', depth: 1},
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

    case 'FETCH_ENGINEER_PENDING': {
      return {
        ...state,
        loading: true,
        engineer: {name: '', email: '', depth: 1}
      }
    }

    case 'FETCH_ENGINEER_FULFILLED': {
      return {
        ...state,
        engineer: action.payload.data,
        errors: {},
        loading: false
      }
    }

    default:
      return state;
  }
}
