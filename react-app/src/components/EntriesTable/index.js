import { connect } from 'react-redux';
import EntriesTable from './EntriesTable';

import { deleteEntry } from '../../actions/entries';

export default connect(
  ({ entries }) => ({ entries }),
  dispatch => ({
    deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
  })
)(EntriesTable);
