import hsluv from "hsluv";

export default class utils {
  /**
   * Get random color for icon
   * @returns {color}
   */
  static getRandomColor() {
    return hsluv.hpluvToHex([this.random(360), 100, 70]);
  }

  /**
   * Random function
   * @param {number} max
   * @returns {number}
   */
  static random(max) {
    return Math.random() * max;
  }

  /**
   * Init data
   * @param {array} arr
   * @returns {array}
   */
  static initData(arr) {
    return this.sortBy(arr, 'rating_desc').map((item, index) => {

      return {
        ...item,
        rating: index + 1,
        color: this.getRandomColor(),
      };
    });
  }

  /**
   * Sort by type
   * @param {array} arr
   * @param {string} type
   * @returns {array}
   */
  static sortBy(arr, type) {
    switch (type) {
      case 'rating_desc': {
        return arr.sort((a, b) => {
          return (a.pageviews < b.pageviews) ? 1 : (a.pageviews > b.pageviews) ? -1 : 0;
        });
      }
      case 'rating_asc': {
        return arr.sort((a, b) => {
          return (a.pageviews > b.pageviews) ? 1 : (a.pageviews < b.pageviews) ? -1 : 0;
        });
      }
      case 'name_desc': {
        return arr.sort((a, b) => {
          return (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0;
        });
      }
      case 'name_asc': {
        return arr.sort((a, b) => {
          return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
        });
      }
      default:
        return arr;
    }
  }

  /**
   * Show search results
   * @param {array} arr
   * @param {string} searchValue
   * @returns {array}
   */
  static showResults(arr, searchValue) {
    try {
      const regex = new RegExp(searchValue, 'i');
      return arr.filter((item => (
        item.name.search(regex) >= 0
      )));
    } catch (e) {
      return [];
    }
  }

  /**
   * Pagination function
   * @param {array} arr
   * @param {number} currPage
   * @returns {object}
   */
  static pagination(arr, currPage) {
    const countItems = arr.length;
    const min = (countItems < 10) ? 1 : currPage * 10 - 9;
    const max = ((currPage * 10) > countItems) ? countItems : currPage * 10;

    return {min, max, countItems};
  }

  /**
   * Get data for the current page
   * @param {array} arr
   * @param {object} pagination
   * @returns {array}
   */
  static pageData(arr, pagination) {
    return arr.slice(pagination.min - 1, pagination.max);
  }
}
