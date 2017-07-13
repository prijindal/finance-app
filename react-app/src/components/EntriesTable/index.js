import { connect } from 'react-redux';
import EntriesTable from './EntriesTable';

import { deleteEntry } from '../../actions/entries';

export default connect(
  ({ entries, persons }) => ({
    entries: entries.map(entry => ({
      ...entry,
      person: persons.filter(person => person.id === entry.person)[0]
    }))
  }),
  dispatch => ({
    deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
  })
)(EntriesTable);
