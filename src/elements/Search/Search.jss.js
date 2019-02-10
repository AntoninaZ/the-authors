import search from '../../images/search.png';

const styles = {
  search: {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translate(0, -50%)",
      width: 30,
      height: 30,
      marginLeft: 10,
      backgroundImage: `url(${search})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
  },
  searchInput: {
    width: "100%",
    height: 50,
    border: "none",
    padding: "20px 20px 20px 50px",
    outline: 0,
    fontSize: 16,
    color: "#1d3648",
    fontWeight: "bold",
    backgroundColor: "#e9eef3",
    borderRadius: "5px 5px 0 0",
  },
};

export default styles;
