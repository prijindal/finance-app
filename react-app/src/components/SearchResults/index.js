import { connect } from 'react-redux';
import SearchResults from './SearchResults';

import { selectPerson } from '../../actions/selectedPerson';

export default connect(
  ({ persons }) => ({ persons }),
  dispatch => ({
    selectPerson: (id) => dispatch(selectPerson(id)),
  })
)(SearchResults);
