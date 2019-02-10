import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './AppWrapper.jss';
import utils from '../../utils/utils';
import List from '../../elements/List';
import Search from "../../elements/Search/Search";
import Pagination from "../../elements/Pagination";
import SortBy from "../../elements/SortBy";

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'rating_desc',
      currentPage: 1,
      searchValue: ''
    };
    this.callbackSearch = this.callbackSearch.bind(this);
    this.callbackSortBy = this.callbackSortBy.bind(this);
    this.callbackPagination = this.callbackPagination.bind(this);
    this.noResults = this.noResults.bind(this);
  }

  /**
   * Search callback
   * @param {string} value
   */
  callbackSearch(value) {
    this.setState({searchValue: value});
  }

  /**
   * Sort by type callback
   * @param {string} type
   */
  callbackSortBy(type) {
    this.setState({sortType: type})
  }

  /**
   * Pagination callback
   * @param {string} direction
   */
  callbackPagination(direction) {
    const {data} = this.props;
    const maxPage = Math.ceil(data.length / 10);
    const {currentPage} = this.state;

    if (direction === 'next') {
      if (currentPage < maxPage) {
        this.setState({currentPage: currentPage + 1})
      }
    }
    if (direction === 'prev') {
      if (currentPage > 1) {
        this.setState({currentPage: currentPage - 1})
      }
    }
  }

  /**
   * No results handler
   * @param {object} pagination
   * @returns {}element}
   */
  noResults(pagination) {
    const {classes} = this.props;

    if (pagination.max === 0) {
      return (<div className={classes.noResults}>По вашему поиску нет результатов</div>);
    }
  }

  render() {
    const {classes, data} = this.props;
    const {currentPage, sortType, searchValue} = this.state;
    const results = utils.showResults(data, searchValue);
    const sortResults = utils.sortBy(results, sortType);
    const pagination = utils.pagination(sortResults, currentPage);
    const pageData = utils.pageData(sortResults, pagination);
    const noResults = this.noResults(pagination);

    return (
      <div className={classes.wrapper}>
        <Search cbSearch={this.callbackSearch}/>
        <SortBy
          cbSortBy={this.callbackSortBy}
          sortActive={sortType}
        />
        {noResults}
        <List data={pageData}/>
        <Pagination pagination={pagination}
                    cbPagination={this.callbackPagination}
        />
      </div>
    );
  }
}

AppWrapper.propType = {
  classes: PropTypes.any.isRequired,
  data: PropTypes.array.isRequired
};

export default injectSheet(styles)(AppWrapper);
