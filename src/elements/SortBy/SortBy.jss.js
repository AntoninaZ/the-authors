import upArrow from '../../images/arrow-up.png';
import downArrow from '../../images/arrow-down.png';

const styles = {
  sortBy:{
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    backgroundColor: "#fff",
  },
  sortByTitle: {
    fontSize: 14,
    color: "#757575",
    fontWeight: "bold",
  },
  sortByItem: {
    position: "relative",
    marginLeft: 15,
    padding: "5px 25px 5px 10px",
    fontSize: 14,
    color: "#1b3648",
    textDecoration: "underline",
    cursor: "pointer",
    "&:after": {
      content: "''",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translate(0, -50%)",
      width: 7,
      height: 7,
      marginLeft: 5,
      marginRight: 10,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    "&:hover": {
      color: "#163FA1",
    },
  },
  sortByUp: {
    extend: "sortByItem",
    "&:after": {
      backgroundImage: `url(${upArrow})`
    }
  },
  sortByDown: {
    extend: "sortByItem",
    "&:after": {
      backgroundImage: `url(${downArrow})`
    }
  },
  active: {
    color: "#163FA1",
    textDecoration: "none",
    border: "1px solid #9eaed6",
  },
};

export default styles;
