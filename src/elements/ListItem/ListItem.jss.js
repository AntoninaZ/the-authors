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
  },
  itemInner: {
    display: "flex",
    maxWidth: "50%",
    alignItems: "center",
  },
  number: {
    marginRight: "30px",
    color: "#b2b2b2",
  },
  icon: {
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    marginRight: "20px",
    fontSize: "20px",
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
    paddingBottom: "10px",
    fontWeight: "bold",
    color: "#1d3648",
  },
  authorPublication: {
    color: "#b2b2b2",
  },
  medal: {
    width: 30,
    height: 60,
    backgroundRepeat: "no-repeat",
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
  }
};

export default styles;
