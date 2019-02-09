import hsluv from "hsluv";

export default class utils {
  static getRandomColor() {
    return hsluv.hpluvToHex([this.random(360), 100, 70]);
  }

  static random(max) {
    return Math.random() * max;
  }

  static sortByViews(arr) {
    return arr.sort((a, b) => {
      return (a.pageviews < b.pageviews) ? 1 : (a.pageviews > b.pageviews) ? -1 : 0;
    }).map((item, index) => {
      return {
        ...item,
        rating: index + 1
      };
    });
  }

  static searchByName(value, arr) {
    let regex = new RegExp(value, 'i');
    return arr.filter((item => (
      item.name.search(regex) >= 0
    )));
  }
}
