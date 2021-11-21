import { Link, NavLink } from "react-router-dom";
import "./Profile-center.css";

// Importing images
import arrow from "../../images/arrow.svg";
import main from "../../images/main.svg";
import boburPhoto from "../../images/profile-photo.svg";

// Importing components
import Tweets from "./NavLinks/tweets";
function ProfileCenter() {
  return (
    <div className="">
      <div className="row">
        <div className="col-12">
          <div className="header-top d-flex align-items-center mt-3 ms-3">
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
      </div>
      {/*     ---------  Image second row ------------------------- */}
      <div className="row">
        <div className="col-12 p-0">
          <div className="main-top mt-3 pb-5">
            <div className="main-first-img position-relative">
              <img
                className="main-img d-block p-0 m-0"
                src={main}
                alt="main img"
                width="100%"
                height="100%"
              />
            </div>
            <div className="main-second-img position-absolute p-0 m-0">
              <img
                className="bobur-img p-0 m-0"
                src={boburPhoto}
                alt="bobur Photo"
                width="140"
                height="140"
              />
            </div>
          </div>
        </div>
      </div>
      {/*     --------- End of Image second row ------------------------- */}

      {/*     ---------  Image second row ------------------------- */}
      <div className="row">
        <div className="col-12">
          <div className="main-info m-3">
            <div className="top-words mt-4">
              <h4 className="user-name m-0 p-0">Bobur</h4>
              <Link className="username d-block text-decoration-none" to="/">
                @bobur_mavlonov
              </Link>
            </div>
            <p className="user-comment__link mt-3">
              UX&UI designer at UX&UI designer at{" "}
              <Link className="text-decoration-none" to="/">
                {" "}
                @abutechuz
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/*     ---------  Adress info row ------------------------- */}
      <div className="row">
        <div className="col-12 m-0 p-0">
          <ul className="d-flex list-unstyled flex-wrap ms-3">
            <li className="list-unstyled">
              <p className="center-userinfo center-userinfo-1">Mashag’daman</p>
            </li>
            <li className="list-unstyled d-flex mb-1">
              <span className="center-userinfo-2 m-0 d-inline-block p-0"></span>
              <Link className="m-0 p-0" to="/">
                t.me/boburjon_mavlonov
              </Link>
            </li>
            <li className="list-unstyled">
              <p className="center-userinfo center-userinfo-3">
                Born November 24, 2000
              </p>
            </li>
            <li className="list-unstyled">
              <p className="center-userinfo center-userinfo-4">
                Joined May 2020
              </p>
            </li>
          </ul>
          <div className="followers-info d-flex ms-3">
            <p className="total-info d-flex">
              <span className="me-1 number-info">67</span>
              Following
            </p>
            <p className="total-info d-flex ms-4">
              <span className="me-1 number-info">47</span>
              Followers
            </p>
          </div>
          <div className="Navlinks ms-4">
            <NavLink
              className="NavLinks__classname"
              activeClassName="NavLinks__activeclassname"
              to="/tweets"
              exact
            >
              Tweets
            </NavLink>
            <NavLink
              className="NavLinks__classname"
              activeClassName="NavLinks__activeclassname"
              to="/replies"
            >
              Tweets & replies
            </NavLink>
            <NavLink
              className="NavLinks__classname"
              activeClassName="NavLinks__activeclassname"
              to="/media"
            >
              Media
            </NavLink>
            <NavLink
              className="NavLinks__classname"
              activeClassName="NavLinks__activeclassname"
              to="/likes"
            >
              Likes
            </NavLink>
          </div>
          <hr />
        </div>
      </div>
      {/*     --------- End of Adress info row ------------------------- */}

      {/*     ---------  Directs according to NavLink to Tweets Route ------------------------- */}
      <div className="row">
        <div className="col-12">{<Tweets />}</div>
      </div>
      {/*     ---------  End of container ------------------------- */}
    </div>
  );
}

export default ProfileCenter;
