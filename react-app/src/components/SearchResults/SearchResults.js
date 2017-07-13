import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
`

export default class SearchResults extends PureComponent {
  render() {
    return (
      <Container className="ui segment">
        <div className="ui selection divided list">
          {this.props.persons.map(person =>
            <div className="item" key={person.id}>
              <div className="content">
                <div className="header">{person.name}</div>
              </div>
            </div>
          )}
        </div>
      </Container>
    )
  }
}
