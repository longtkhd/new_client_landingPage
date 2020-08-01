/* MemberPage selector */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the memberPage state domain
 */



const selectMemberPageDomain = state => state.memberPage || initialState;

const makeSelectMemberPage = () =>
  createSelector(
    selectMemberPageDomain,
    substate => substate,
  );

export default makeSelectMemberPage;
export { selectMemberPageDomain }; 