import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 0;
`

const Button = styled.button`
  margin-bottom: 1em !important;
`

const IconButton = ({ icon, color='primary', disabled }) => (
  <Button className={"ui icon button " + color + " " + (disabled ? "disabled" : "")}>
    <i className={icon + " icon"}></i>
  </Button>
)

export default class PersonsSearch extends PureComponent {
  render() {
    return (
      <Container className="ui attached segment inverted">
        <IconButton icon="home" disabled={true}/>
        <IconButton icon="add"/>
      </Container>
    )
  }
}
