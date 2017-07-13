import { combineReducers } from 'redux';

import entries from './entries';
import persons from './persons';

export default combineReducers({
  entries,
  persons
});
