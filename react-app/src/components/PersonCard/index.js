import { connect } from 'react-redux';
import PersonCard from './PersonCard';

export default connect(
  ({ persons, selectedPerson, entries }) => {
    let filteredPersons = persons.filter(person => person.id === selectedPerson);
    if(filteredPersons.length > 0) {
      return {
        selectedPerson: filteredPersons,
        entries: entries.filter(entry => entry.person === selectedPerson),
      }
    } else {
      return {}
    }
  },
)(PersonCard);
