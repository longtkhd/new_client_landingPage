/* MemberPage selector */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the memberPage state domain
 */



const selectProfileDomain = state => state.profile || initialState;

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

export default makeSelectProfile;
export { selectProfileDomain }; 