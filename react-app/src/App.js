import React, { PureComponent } from 'react';
import styled from 'styled-components';

import LeftBar from './components/LeftBar';
import Home from './pages/Home';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

class App extends PureComponent {
  render() {
    return (
      <Container>
        <LeftBar />
        <Home/>
      </Container>
    );
  }
}

export default App;
