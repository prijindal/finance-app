import React, { PureComponent } from 'react';
import styled from 'styled-components';
import faker from 'faker';

import { Link } from 'react-router-dom';

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
              <th>Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6,7,8,9,10].map(i =>
              <tr key={i}>
                <td className="collapsing">
                  <div className="ui fitted checkbox">
                    <input type="checkbox" /> <label></label>
                  </div>
                </td>
                <td>{faker.name.firstName()}</td>
                <td>+{i * 1000}</td>
                <td className="right aligned collapsing">{i + 10} hours ago</td>
                <td className="collapsing">
                  <button className="ui icon red button">
                    <i className={"delete icon"}></i>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="full-width">
            <tr>
              <th></th>
              <th colSpan="4">
                <Link to="add" className="ui right floated small primary labeled icon button">
                  <i className="add icon"></i> Add Entry
                </Link>
                <div className="ui small button">
                  Select All
                </div>
                <div className="ui small  button">
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
