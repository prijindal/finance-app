import React, { PureComponent } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import jQuery from 'jquery';

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
  newEntry = () => {
    jQuery('#inputSearch input').val(this.props.selectedPerson.name)
  }

  deleteAll = () => {
    this.props.entries.forEach(entry => {
      this.props.deleteEntry(entry.id);
    })
    this.props.deletePerson(this.props.selectedPerson.id)
  }

  render() {
    const { selectedPerson } = this.props
    if(!selectedPerson) {
      return <div></div>
    }
    return (
      <Container className="ui attached segment inverted">
        <Card className="ui card">
          <div className="content">
            <a className="header">{selectedPerson.name}</a>
            <div className="meta">
              <span className="date">Balance: {this.props.entries.reduce((last, entry) => (entry.credit - entry.debit + last), 0)}</span>
            </div>
          </div>
          <TableContent className="content">
            <table className="ui celled striped table">
              <tbody>
                {this.props.entries.map(entry =>
                  <tr key={entry.id}>
                    <td>+{entry.credit}</td>
                    <td>-{entry.debit}</td>
                    <td className="right aligned collapsing">{moment(entry.date).fromNow()}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableContent>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button" onClick={this.newEntry}>New entry</div>
              <div className="ui basic red button" onClick={this.deleteAll}>Delete all</div>
            </div>
          </div>
        </Card>
      </Container>
    )
  }
}
