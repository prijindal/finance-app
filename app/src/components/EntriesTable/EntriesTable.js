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
  state = {
    checked: []
  }

  toggleChecked = (entry) => {
    let filteredChecked = this.state.checked.filter(i => i === entry.id)
    if(filteredChecked.length > 0) {
      this.setState(prevState => ({
        checked: prevState.checked.filter(i => i !== entry.id)
      }))
    } else {
      this.setState(prevState => ({
        checked: [
          ...prevState.checked,
          entry.id
        ]
      }))
    }
  }

  deleteChecked = () => {
    this.state.checked.forEach(i => {
      this.props.deleteEntry(i)
    })
    this.clearAll();
  }

  selectAll = () => {
    this.setState(prevState => ({
      checked: this.props.entries.map(i => i.id)
    }))
  }

  clearAll = () => {
    this.setState({
      checked: []
    })
  }

  isChecked = (id) => {
    return this.state.checked.filter(i => i === id).length > 0;
  }

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
                  <div className="ui fitted checkbox checked">
                    <input type="checkbox" onChange={() => this.toggleChecked(entry)} checked={this.isChecked(entry.id)}/>
                    <label></label>
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
                <div className={"ui small button " + (this.state.checked.length !== this.props.entries.length ? "": "disabled")} onClick={this.selectAll}>
                  Select All
                </div>
                <div className={"ui small button " + (this.state.checked.length > 0 ? "": "disabled")} onClick={this.clearAll}>
                  Clear All
                </div>
                <div className={"ui small button " + (this.state.checked.length > 0 ? "": "disabled")} onClick={this.deleteChecked}>
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
