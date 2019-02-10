import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './Pagination.jss';

class Pagination extends PureComponent {
  constructor(props) {
    super(props);
    this.paginationHandler = this.paginationHandler.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }

  /**
   * Pagination handler
   * @param {event} e
   */
  paginationHandler(e) {
    const {cbPagination} = this.props;
    const target = e.currentTarget;

    if (target.dataset && target.dataset.direction) {
      cbPagination(target.dataset.direction);
    }
  }

  /**
   * Render pagination
   * @returns {string}
   */
  renderPagination() {
    const {pagination} = this.props;

    return `${pagination.min} - ${pagination.max}`;
  }

  render() {
    const strPagination = this.renderPagination();
    const {classes, pagination} = this.props;

    return (
      <div className={classes.paginationWrapper}>
        <span
          className={cn(classes.arrowLeft, {[classes.disable]: pagination.min === 1})}
          data-direction="prev"
          onClick={this.paginationHandler}/>
        <span className={cn(classes.pagination, {[classes.disable]: pagination.max === 0})}>{strPagination}</span>
        <span
          className={cn(classes.arrowRight, {[classes.disable]: pagination.max === pagination.countItems})}
          data-direction="next"
          onClick={this.paginationHandler}/>
      </div>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.any.isRequired,
  pagination: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    countItems: PropTypes.number.isRequired,
  })
};

export default injectSheet(styles)(Pagination);
