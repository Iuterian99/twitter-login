import "./FirstPage.css";
import twitterLogo from "../../images/twitter-logo.svg";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mx-auto">
          <form className="form">
            <img
              className="logo"
              src={twitterLogo}
              alt="twitter logo"
              width="50"
              height="41"
            />
            <h2 className="form-header mt-3">Log in to Twitter</h2>
            <input
              className="form-control p-2 mt-3"
              type="text"
              placeholder="Phone number, email address"
              autoFocus
            />
            <input
              className="form-control p-2 mt-3"
              type="password"
              placeholder="Password"
            />
            <button className="btn w-100 mt-3 mb-4 ms-4 align-items-center">
              Log in
            </button>
            <div className="d-flex justify-content-between">
              <Link className="" to="/">
                Forgot password?
              </Link>
              <Link className="signUpLink" to="/signUp">
                Sign up to Twitter
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
