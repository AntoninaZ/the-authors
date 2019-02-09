import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './Search.jss';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handlerSearch = this.handlerSearch.bind(this);
  }

  handlerSearch(e) {
    const {cbSearch} = this.props;

    this.setState({value: e.target.value});
    cbSearch(e.target.value);
  }

  render() {
    const {value} = this.state;
    const {classes} = this.props;

    return (
      <div className={classes.search}>
        <input type="text" className={classes.searchInput}
               placeholder="Поиск по имени автора"
               value={value}
               onChange={this.handlerSearch}/>
      </div>
    );
  }
}

export default injectSheet(styles)(Search);
