import leftArrow from '../../images/arrow-left.png';
import rightArrow from '../../images/arrow-right.png';

const styles = {
  paginationWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  pagination: {
    minWidth: 40,
    color: "#fff",
    userSelect: "none",
  },
  arrow: {
    display: "flex",
    width: 16,
    height: 16,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    opacity: 0.6
  },
  arrowLeft: {
    extend: "arrow",
    marginRight: 10,
    backgroundImage: `url(${leftArrow})`,
  },
  arrowRight: {
    extend: "arrow",
    marginLeft: 10,
    backgroundImage: `url(${rightArrow})`,
  },
  disable: {
    visibility: "hidden",
  },
};

export default styles;
