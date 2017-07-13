import { connect } from 'react-redux';
import EntryInput from './EntryInput';

import { addEntry } from '../../actions/entries';

export default connect(
  () => ({ }),
  dispatch => ({
    addEntry: (entry) => dispatch(addEntry(entry))
  })
)(EntryInput);
