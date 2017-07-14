import React, { PureComponent } from 'react';
import jQuery from 'jquery';

class EntryInput extends PureComponent {
  componentDidMount() {
    this.updateSearch(this.props.persons)
  }

  updateSearch = (source) => {
    this._search = jQuery('#inputSearch').search({
      source,
      searchFields: ['name'],
      fields: {
        title: 'name'
      },
      searchDelay: 0,
      selectFirstResult: true,
      onSelect: (person) => {
        this.setState({
          person,
          personText: person.name
        })
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.persons);
    this.updateSearch(nextProps.persons)
  }

  state = {
    person: null,
    personText: '',
    credit: '',
    debit: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { person, personText, credit, debit } = this.state;
    if(person) {
      this.props.addEntry({
        person: person.id,
        credit,
        debit
      })
    } else {
      const { id } = this.props.addPerson(personText);
      this.props.addEntry({
        person: id,
        credit,
        debit
      })
    }
    this.setState({
      person: null,
      personText: '',
      credit: '',
      debit: '',
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkEnter = (e) => {
    if(e.keyCode === 13) {
      this.onSubmit(e);
    }
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
            name="personText"
            onChange={this.onChange}
            value={this.state.personText}
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
            onKeyUp={this.checkEnter}
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
            onKeyUp={this.checkEnter}
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
