import React, { PureComponent } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import EntryInput from '../EntryInput';

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
        <table className="ui celled striped definition table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.entries.map(entry =>
              <tr key={entry.id}>
                <td className="collapsing">
                  <div className="ui fitted checkbox">
                    <input type="checkbox" /> <label></label>
                  </div>
                </td>
                <td>{entry.person.name}</td>
                <td>{entry.credit}</td>
                <td>{entry.debit}</td>
                <td className="right aligned collapsing">{moment(entry.time).fromNow()}</td>
                <td className="collapsing">
                  <button className="ui icon red button" onClick={() => this.props.deleteEntry(entry.id)}>
                    <i className={"delete icon"}></i>
                  </button>
                </td>
              </tr>
            )}
            <EntryInput />
          </tbody>
          <tfoot className="full-width">
            <tr>
              <th></th>
              <th colSpan="5">
                <button className="ui right floated small primary labeled icon button">
                  <i className="add icon"></i> Add Entry
                </button>
                <div className="ui small button">
                  Select All
                </div>
                <div className="ui small disabled button">
                  Delete
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </Container>
    )
  }
}
