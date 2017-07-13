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

  render() {
    return (
      <tr>
        <td></td>
        <td className="ui search" id="inputSearch">
          <div className="results"></div>
          <input className="prompt" type="text" placeholder="People" />
        </td>
        <td className="ui search">
          <input className="prompt" type="number" placeholder="Credit" />
        </td>
        <td className="ui search">
          <input className="prompt" type="number" placeholder="Debit" />
        </td>
        <td>
          <button className="ui icon button">
            <i className="send icon"></i>
          </button>
        </td>
      </tr>
    )
  }
}

export default EntryInput;
