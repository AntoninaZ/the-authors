import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './List.jss';

import ListItem from '../ListItem';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, data} = this.props;
    return (
      <React.Fragment>
        {data.map((item, index) => (
          <ListItem
            key={`author-${index}`}
            dataItem={item}/>
        ))}
      </React.Fragment>
    );
  }
}


export default injectSheet(styles)(List);
