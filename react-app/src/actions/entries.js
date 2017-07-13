/* @flow */
import uuid from 'uuid';
import type { Action } from './types';

export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const addEntry = ({ person, credit, debit} ):Action => ({
  type: ADD_ENTRY,
  person,
  credit,
  debit,
  id: uuid.v4(),
  date: Date.now(),
});

export const deleteEntry = (id):Action => ({
  type: DELETE_ENTRY,
  id
});
