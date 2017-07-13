import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Card = styled.div`
  width: 100% !important;
`

const TableContent = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`

export default class PersonCard extends PureComponent {
  render() {
    return (
      <Container className="ui attached segment inverted">
        <Card className="ui card">
          <div className="content">
            <a className="header">Daniel</a>
            <div className="meta">
              <span className="date">Balance: 10000</span>
            </div>
          </div>
          <TableContent className="content">
            <table className="ui celled striped table">
              <tbody>
                {[1,2,3,4,5,6].map(i =>
                  <tr key={i}>
                    <td>+{i * 1000}</td>
                    <td className="right aligned collapsing">{i + 10} hours ago</td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableContent>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">New entry</div>
              <div className="ui basic red button">Clear all</div>
            </div>
          </div>
        </Card>
      </Container>
    )
  }
}
