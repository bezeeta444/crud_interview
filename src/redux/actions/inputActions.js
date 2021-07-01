import actionTypes from '../actionTypes';

export default {
  setInputName: name =>({
    type:actionTypes.SET_INPUT_NAME,
    name,
  }),
  setInputEmail: email=>({
    type:actionTypes.SET_INPUT_EMAIL,
    email,
  }),
  setInputIc: ic =>({
    type:actionTypes.SET_INPUT_IC,
    ic,
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs:() => ({
    type:actionTypes.DELETE_NOTE,
  })
}