import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './AppWrapper.jss';
import List from '../../elements/List';
import Search from "../../elements/Search/Search";
import utils from '../../utils/utils';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: utils.sortByViews(this.props.data)};
    this.callbackSearch = this.callbackSearch.bind(this);
  }

  callbackSearch(value) {
    const {data: dataState} = this.state;
    const {data: dataProps} = this.props;
    if (value) {
      const filterData = utils.searchByName(value, dataState);
      this.setState({data: filterData});
    } else {
      this.setState({data: utils.sortByViews(dataProps)});
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <Search cbSearch={this.callbackSearch}/>
        <List data={this.state.data}/>
      </div>
    );
  }
}

AppWrapper.propType = {
  data: PropTypes.array.isRequired
};

export default injectSheet(styles)(AppWrapper);
