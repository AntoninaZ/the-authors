import goldMedal from '../../images/1st.svg';
import silverMedal from '../../images/2nd.svg';
import bronzeMedal from '../../images/3rd.svg';

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 40px 10px 10px",
    borderWidth: "1px 0",
    borderStyle: 'solid',
    borderColor: "#e8e9ec",
    backgroundColor: "#fff",
    "&:nth-child(2n)": {
      backgroundColor: "#f4f6f9",
    },
    "&:last-child": {
      borderRadius: "0 0 5px 5px",
    },
  },
  itemInner: {
    display: "flex",
    maxWidth: "55%",
    alignItems: "center",
  },
  number: {
    minWidth: 30,
    marginRight: 10,
    color: "#b2b2b2",
  },
  icon: {
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)"
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#1d3648",
  },
  authorPublication: {
    color: "#b2b2b2",
  },
  medal: {
    width: 20,
    height: 40,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  goldMedal: {
    backgroundImage: `url(${goldMedal})`,
  },
  silverMedal: {
    backgroundImage: `url(${silverMedal})`,
  },
  bronzeMedal: {
    backgroundImage: `url(${bronzeMedal})`,
  },
  pageViews: {
    fontWeight: "bold",
    color: "#1d3648",
  },
};

export default styles;
