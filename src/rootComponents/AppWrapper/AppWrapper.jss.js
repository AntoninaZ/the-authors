import noResults from '../../images/no-results.svg';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 30px',
  },
  noResults: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
    opacity: 0.4,
    "&:before": {
      content: "''",
      display: "block",
      width: 85,
      height: 80,
      marginBottom: 20,
      backgroundImage: `url(${noResults})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
};

export default styles;
