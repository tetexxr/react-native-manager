import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE
} from './Types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  
  // Use string interpolation of ES6
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
