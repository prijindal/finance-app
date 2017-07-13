import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 0;
`

const Button = styled(Link)`
  margin-bottom: 1em !important;
`

const IconButton = ({ icon, color='primary', to }) => (
  <Button className={"ui icon button " + color} to={to}>
    <i className={icon + " icon"}></i>
  </Button>
)

export default class PersonsSearch extends PureComponent {
  render() {
    return (
      <Container className="ui attached segment inverted">
        <IconButton icon="home" to="/"/>
        <IconButton icon="add" to="/add"/>
      </Container>
    )
  }
}
