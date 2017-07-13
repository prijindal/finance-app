import { connect } from 'react-redux';
import SearchResults from './SearchResults';

export default connect(
  ({ persons }) => ({ persons }),
)(SearchResults);
