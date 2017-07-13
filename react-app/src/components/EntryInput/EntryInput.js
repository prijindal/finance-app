import React, { PureComponent } from 'react';
import jQuery from 'jquery';
import faker from 'faker';

const persons = [];

for (var i = 0; i < 20; i++) {
  persons.push({
    name: faker.name.firstName()
  })
}

class EntryInput extends PureComponent {
  componentDidMount() {
    jQuery('#inputSearch').search({
      source: persons,
      searchFields: ['name'],
      fields: {
        title: 'name'
      }
    })
  }

  state = {
    person: undefined,
    credit: undefined,
    debit: undefined,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEntry(this.state);
    this.setState({
      person: undefined,
      credit: undefined,
      debit: undefined,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <tr>
        <td></td>
        <td className="ui search" id="inputSearch">
          <div className="results"></div>
          <input
            className="prompt"
            type="text"
            placeholder="Person"
            name="person"
            onChange={this.onChange}
            value={this.state.person}
          />
        </td>
        <td className="ui search">
          <input
            className="prompt"
            type="number"
            placeholder="Credit"
            name="credit"
            onChange={this.onChange}
            value={this.state.credit}
          />
        </td>
        <td className="ui search">
          <input
            className="prompt"
            type="number"
            placeholder="Debit"
            name="debit"
            onChange={this.onChange}
            value={this.state.debit}
          />
        </td>
        <td>
          <button className="ui icon button" type="submit" onClick={this.onSubmit}>
            <i className="send icon"></i>
          </button>
        </td>
        <td></td>
      </tr>
    )
  }
}

export default EntryInput;
