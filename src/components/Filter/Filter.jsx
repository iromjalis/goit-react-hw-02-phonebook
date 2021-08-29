import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './Filter.styles';

class Filter extends Component {
  render() {
    return (
      <div className="FilterWrapper">
        Find contact by name
        <form action="">
          <label htmlFor="">
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  // bla: PropTypes.string,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
