import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  width: 100%;
`

export default class SearchBar extends PureComponent {
  render() {
    return (
      <div className="ui search">
        <SearchBox className="ui icon input">
          <input className="prompt" type="text" placeholder="People" />
          <i className="search icon"></i>
        </SearchBox>
      </div>
    )
  }
}
