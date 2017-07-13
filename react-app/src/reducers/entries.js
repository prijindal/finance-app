/* @flow */
import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import type { Action } from '../actions/types';
import { ADD_ENTRY, DELETE_ENTRY } from '../actions/entries';

export type State = [{
  name: string,
  token: string,
}];

const INITIAL_STATE = Immutable([]);

const addEntry = (state: State = INITIAL_STATE, action) => (
  [
    ...state,
    {
      person: action.person,
      credit: action.credit,
      debit: action.debit,
      id: action.id,
      date: action.time,
    }
  ]
)

const deleteEntry = (state: State = INITIAL_STATE, action) => (
  state.filter(entry => entry.id !== action.id)
)

const HANDLERS = {
  [ADD_ENTRY]: addEntry,
  [DELETE_ENTRY]: deleteEntry,
};

export default createReducer(INITIAL_STATE, HANDLERS);
