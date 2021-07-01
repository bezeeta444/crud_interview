import actionTypes from '../actionTypes';

const initialState = {
  id: 0,
  name:'',
  email: '',
  ic : '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_NAME: {
      const { name } = action;
      return {
        ...state,
        name,
      }
    }
    case actionTypes.SET_INPUT_EMAIL: {
      const { email } = action;
      return {
        ...state,
        email,
      }
    }
    case actionTypes.SET_INPUT_IC: {
      const { ic } = action;
      return {
        ...state,
        ic,
      }
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}