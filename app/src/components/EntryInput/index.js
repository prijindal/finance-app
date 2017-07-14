import { connect } from 'react-redux';
import EntryInput from './EntryInput';

import { addEntry } from '../../actions/entries';
import { addPerson } from '../../actions/persons';

export default connect(
  ({ persons }) => ({ persons }),
  dispatch => ({
    addEntry: (entry) => dispatch(addEntry(entry)),
    addPerson: (personName) => dispatch(addPerson(personName))
  })
)(EntryInput);
