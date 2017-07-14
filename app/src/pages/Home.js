import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';

import PersonsSearch from '../components/PersonsSearch';
import PersonCard from '../components/PersonCard';
import EntriesTable from '../components/EntriesTable';

const ContactSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 400px;
`

class App extends PureComponent {
  render() {
    return (
      <Container>
        <EntriesTable />
        <ContactSide>
          <PersonsSearch/>
          <PersonCard />
        </ContactSide>
      </Container>
    );
  }
}

export default App;
