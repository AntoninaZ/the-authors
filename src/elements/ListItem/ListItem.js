import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './ListItem.jss';

class ListItem extends PureComponent {
  render() {
    const {classes, dataItem} = this.props;

    return (
      <div className={classes.item}>
        <div className={classes.itemInner}>
          <span className={classes.number}>{dataItem.rating}</span>
          <div style={{backgroundColor: dataItem.color}} className={classes.icon}>{dataItem.name[0]}</div>
          <div className={classes.authorInfo}>
            <div className={classes.authorName}>{dataItem.name}</div>
            <div className={classes.authorPublication}>{dataItem.count_pub} публ.</div>
          </div>
        </div>
        <div className={cn(classes.medal, {
          [classes.goldMedal]: (dataItem.rating === 1),
          [classes.silverMedal]: (dataItem.rating === 2),
          [classes.bronzeMedal]: (dataItem.rating === 3),
        })}/>
        <div className={classes.pageViews}>{dataItem.pageviews}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.any.isRequired,
  dataItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    count_pub: PropTypes.number.isRequired,
    pageviews: PropTypes.number.isRequired,
  })
};

export default injectSheet(styles)(ListItem);
