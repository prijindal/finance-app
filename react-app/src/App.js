import React, { PureComponent } from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import LeftBar from './components/LeftBar';
import Home from './pages/Home';
import About from './pages/About';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Container>
          <LeftBar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Container>
      </Router>
    );
  }
}

export default App;
