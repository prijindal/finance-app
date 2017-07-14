import { combineReducers } from 'redux';

import entries from './entries';
import persons from './persons';
import selectedPerson from './selectedPerson';

export default combineReducers({
  entries,
  persons,
  selectedPerson
});
