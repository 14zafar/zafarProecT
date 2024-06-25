import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import aksiya from "../images/Group 96.svg"; // Assuming this is a default image

export default function Box({ item }) {
  return (
    <Link to={item.link}>
      <div className="Box">
        <img src={item.img || aksiya} alt={item.name || "Default Image"} />
        <p className="boxName">{item.name}</p>
      </div>
    </Link>
  );
}

Box.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
