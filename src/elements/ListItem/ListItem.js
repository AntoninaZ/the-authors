import React, { Component } from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './ListItem.jss';
import utils from '../../utils/utils';


class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, dataItem} = this.props;
    const color = utils.getRandomColor();

    return (
      <div className={classes.item}>
        <div className={classes.itemInner}>
          <span className={classes.number}>{dataItem.rating}</span>
          <div style={{backgroundColor: color}} className={classes.icon}>{dataItem.name[0]}</div>
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

export default injectSheet(styles)(ListItem);
