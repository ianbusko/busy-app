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

    case 'NEW_ENGINEER': {
      return {
        ...state,
        engineer: {name: '', email: '', depth: 1}
      }
    }

    case 'SAVE_ENGINEER_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_ENGINEER_FULFILLED': {
      return {
        ...state,
        engineers: [...state.engineers, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_ENGINEER_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { name, email, depth } = data.errors;
      const errors = { global: data.message, name, email, depth };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'UPDATE_ENGINEER_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_ENGINEER_FULFILLED': {
      const engineer = action.payload.data;
      return {
        ...state,
        engineers: state.engineers.map(item => item._id === engineer._id ? engineer : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_ENGINEER_REJECTED': {
      const data = action.payload.response.data;
      const { name, email, depth } = data.errors;
      const errors = { global: data.message, name, email, depth };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    default:
      return state;
  }
}
