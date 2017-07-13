/* @flow */
import type { Action } from './types';

export const SELECT_PERSON = 'SELECT_PERSON';

export const selectPerson = (id):Action => ({
  type: SELECT_PERSON,
  id
});
