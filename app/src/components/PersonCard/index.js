import { connect } from 'react-redux';
import PersonCard from './PersonCard';

import { deleteEntry } from '../../actions/entries';
import { deletePerson } from '../../actions/persons';

export default connect(
  ({ persons, selectedPerson, entries }) => {
    let filteredPersons = persons.filter(person => person.id === selectedPerson);
    if(filteredPersons.length > 0) {
      return {
        selectedPerson: filteredPersons[0],
        entries: entries.filter(entry => entry.person === selectedPerson),
      }
    } else {
      return {}
    }
  },
  dispatch => ({
    deleteEntry: (entryId) => dispatch(deleteEntry(entryId)),
    deletePerson: (personId) => dispatch(deletePerson(personId)),
  })
)(PersonCard);
