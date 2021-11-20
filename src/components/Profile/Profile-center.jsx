import "./Profile-center.css";
import { Link } from "react-router-dom";

// Importing images
import arrow from "../../images/arrow.svg";

function ProfileCenter() {
  return (
    <div className="container">
      <div className="top d-flex align-items-center mt-3">
        <Link className="d-block" to="/">
          <img
            className="arrow-logo"
            src={arrow}
            alt="arrow logo"
            width="20"
            height="10"
          />
        </Link>
        <div className="top-words ms-4">
          <h5 className="top-heading-name m-0 p-0">Bobur</h5>
          <p className="top-content m-0 p-0">1,070 Tweets</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCenter;
