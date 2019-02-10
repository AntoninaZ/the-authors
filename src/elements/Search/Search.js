import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import injectSheet from 'react-jss';
import styles from './Search.jss';


class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handlerSearch = this.handlerSearch.bind(this);
  }

  /**
   * Handler search
   * @param {event} e
   */
  handlerSearch(e) {
    const {cbSearch} = this.props;

    this.setState({value: e.currentTarget.value});
    cbSearch(e.currentTarget.value);
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

Search.propTypes = {
  classes: PropTypes.any.isRequired,
  cbSearch: PropTypes.func.isRequired
};

export default injectSheet(styles)(Search);
