/* @flow */
import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import type { Action } from '../actions/types';
import { SELECT_PERSON } from '../actions/selectedPerson';

export type State = number;

const INITIAL_STATE = Immutable(0);

const HANDLERS = {
  [SELECT_PERSON]: (state: State = INITIAL_STATE, action) => action.id,
};

export default createReducer(INITIAL_STATE, HANDLERS);
