import "./Profile-Navbar.css";

// Importing images
import { NavLink, Link } from "react-router-dom";
import profileLogo from "../../images/twitter-logo.svg";
import home from "../../images/home.svg";
import explore from "../../images/explore.svg";
import notification from "../../images/notifications.svg";
import messages from "../../images/messages.svg";
import bookmarks from "../../images/bookmarks.svg";
import lists from "../../images/lists.svg";
import profile from "../../images/profile.svg";
import more from "../../images/more.svg";
import BoburPhoto from "../../images/profile-photo.svg";

// Importing Components
import ProfileCenter from "./Profile-center";

function ProfileNavbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="border-end">
            <img
              className="img-responsive mt-4 mb-2"
              src={profileLogo}
              alt="Twitter Logo"
              width="40"
              height="33"
            />
            <ul className="list-unstyled">
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={home}
                    alt="Home logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Home</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={explore}
                    alt="explore logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Explore</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={notification}
                    alt="notification logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Notifications</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={messages}
                    alt="messages logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Messages</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={bookmarks}
                    alt="bookmarks logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Bookmarks</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={lists}
                    alt="lists logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Lists</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={profile}
                    alt="profile logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">Profile</span>
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  className="text-decoration-none m-0 p-0 d-flex align-items-center"
                  activeClassName="onActive"
                  to="/"
                >
                  <img
                    className="img-responsive"
                    src={more}
                    alt="more logo"
                    width="26"
                    height="24"
                  />
                  <span className="text-dark ms-3">More</span>
                </NavLink>
              </li>
            </ul>
            <form className="form">
              <button className="btn btn-primary">Tweet</button>
            </form>
            <div className="profile-info d-flex align-items-center mb-2">
              <img
                className="img-responsive userFoto"
                src={BoburPhoto}
                alt="Bobur Photo"
                width="50"
                height="50"
              />
              <span className="UserNames ms-2">
                <h4 className="user-name m-0 p-0">Bobur</h4>
                <Link className="username d-block text-decoration-none" to="/">
                  @bobur_mavlonov
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">{<ProfileCenter />}</div>

        <div className="col-3 p-0 m-0"></div>
      </div>
    </div>
  );
}

export default ProfileNavbar;
