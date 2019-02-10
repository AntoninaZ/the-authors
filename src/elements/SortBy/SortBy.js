import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './SortBy.jss';

class SortBy extends PureComponent {
  constructor(props) {
    super(props);
    this.sortByHandler = this.sortByHandler.bind(this);
  }

  /**
   * Sort by type handler
   * @param {event} e
   */
  sortByHandler(e) {
    const target = e.currentTarget;
    const {cbSortBy} = this.props;

    if (target.dataset && target.dataset.sort) {
      cbSortBy(target.dataset.sort);
    }
  }

  render() {
    const {classes, sortActive} = this.props;

    return (
      <div className={classes.sortBy}>
        <span className={classes.sortByTitle}>Сортировать по:</span>
        <div
          className={cn(classes.sortByDown, {[classes.active]: sortActive === "rating_desc"})}
          onClick={this.sortByHandler}
          data-sort="rating_desc"
        >
          Рейтингу
        </div>
        <div
          className={cn(classes.sortByUp, {[classes.active]: sortActive === "rating_asc"})}
          onClick={this.sortByHandler}
          data-sort="rating_asc"
        >
          Рейтингу
        </div>
        <div
          className={cn(classes.sortByDown, {[classes.active]: sortActive === "name_desc"})}
          onClick={this.sortByHandler}
          data-sort="name_desc"
        >
          Имени
        </div>
        <div
          className={cn(classes.sortByUp, {[classes.active]: sortActive === "name_asc"})}
          onClick={this.sortByHandler}
          data-sort="name_asc"
        >
          Имени
        </div>
      </div>
    );
  }
}

SortBy.propTypes = {
  classes: PropTypes.any.isRequired,
  sortActive: PropTypes.oneOf(["rating_desc", "rating_asc", "name_desc", "name_asc"]),
  cbSortBy: PropTypes.func.isRequired
};

export default injectSheet(styles)(SortBy);
