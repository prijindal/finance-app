import React, { PureComponent } from 'react';
import styled from 'styled-components';
import faker from 'faker';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
  max-height: 300px;
`

let people_list = []

for (var i = 0; i < 20; i++) {
  people_list.push(faker.name.firstName())
}

export default class SearchResults extends PureComponent {
  render() {
    return (
      <Container className="ui segment">
        <div className="ui selection divided list">
          {people_list.map((i, idx) =>
            <div className="item" key={idx}>
              <div className="content">
                <div className="header">{i}</div>
              </div>
            </div>
          )}
        </div>
      </Container>
    )
  }
}
