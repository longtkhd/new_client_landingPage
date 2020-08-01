/* Adduser selector */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the memberPage state domain
 */



const selectAddUserPageDomain = state => state.addUserPage || initialState;

const makeSelectMemberPage = () =>
  createSelector(
    selectAddUserPageDomain,
    substate => substate,
  );

export default makeSelectMemberPage;
export { selectAddUserPageDomain };