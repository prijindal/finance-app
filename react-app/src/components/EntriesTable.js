import React, { PureComponent } from 'react';
import styled from 'styled-components';
import faker from 'faker';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
  margin: 0 !important;
  border-radius: 0 !important;
`

export default class EntriesTable extends PureComponent {
  render() {
    return (
      <Container className="ui">
        <table className="ui celled striped table">
          <tbody>
            {[1,2,3,4,5,6,7,8,9,10].map(i =>
              <tr key={i}>
                <td>{faker.name.firstName()}</td>
                <td>+{i * 1000}</td>
                <td className="right aligned collapsing">{i + 10} hours ago</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
    )
  }
}
