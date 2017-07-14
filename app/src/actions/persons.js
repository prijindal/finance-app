/* @flow */
import uuid from 'uuid';
import type { Action } from './types';

export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const addPerson = (name):Action => ({
  type: ADD_PERSON,
  name,
  id: uuid.v4(),
});

export const deletePerson = (id):Action => ({
  type: DELETE_PERSON,
  id
});
