import React, { PureComponent } from 'react';
import styled from 'styled-components';

import PersonsSearch from '../components/PersonsSearch';
import PersonCard from '../components/PersonCard';
import EntriesTable from '../components/EntriesTable';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 350px;
`

class App extends PureComponent {
  render() {
    return (
      <Container>
        <Upper>
          <PersonsSearch/>
          <PersonCard />
        </Upper>
        <EntriesTable />
      </Container>
    );
  }
}

export default App;
