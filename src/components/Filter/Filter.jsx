import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './Filter.styles';

class Filter extends Component {
  handleFilter = e => {
    this.props.onFilter(e.currentTarget.value);
  };
  render() {
    const { filter } = this.props;
    return (
      <div className="FilterWrapper">
        Find contact by name
        <form action="">
          <label htmlFor="">
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleFilter}
            />
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
