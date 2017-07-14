import React, { PureComponent } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export default class PersonsSearch extends PureComponent {
  render() {
    return (
      <Container className="ui attached segment inverted">
        <SearchBar />
        <SearchResults />
      </Container>
    )
  }
}
