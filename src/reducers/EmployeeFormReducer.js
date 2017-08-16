import { EMPLOYEE_UPDATE } from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // Use key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
