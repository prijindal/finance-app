/* @flow */
import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ADD_PERSON, DELETE_PERSON } from '../actions/persons';

export type State = [{
  name: string,
}];

const INITIAL_STATE = Immutable([]);

const addPerson = (state: State = INITIAL_STATE, action) => (
  [
    ...state,
    {
      name: action.name,
      id: action.id,
    }
  ]
)

const deletePerson = (state: State = INITIAL_STATE, action) => (
  state.filter(entry => entry.id !== action.id)
)

const HANDLERS = {
  [ADD_PERSON]: addPerson,
  [DELETE_PERSON]: deletePerson,
};

export default createReducer(INITIAL_STATE, HANDLERS);
