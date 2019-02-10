import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './List.jss';
import ListItem from '../ListItem';

class List extends PureComponent {
  render() {
    const {classes, data} = this.props;

    return (
      <div className={classes.list}>
        {data.map((item) => (
          <ListItem
            key={item.rating}
            dataItem={item}/>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.any.isRequired,
  data: PropTypes.array.isRequired
};

export default injectSheet(styles)(List);
