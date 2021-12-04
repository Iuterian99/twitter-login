import "./FirstPage.css";
import twitterLogo from "../../images/twitter-logo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

import UseAuthiration from "../Hooks/UseAuthiration";

function FirstPage() {
  const [setToken] = UseAuthiration(true);
  const usernameRef = useRef();
  const userPasswordRef = useRef();

  const handleLogin = (evt) => {
    evt.preventDefault();
    const userInfo = {
      username: usernameRef.current.value,
      userPassword: userPasswordRef.current.value,
    };
    setToken(userInfo);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mx-auto">
          <form className="form" onSubmit={handleLogin}>
            <img
              className="logo"
              src={twitterLogo}
              alt="twitter logo"
              width="50"
              height="41"
            />
            <h2 className="form-header mt-3">Log in to Twitter</h2>
            <input
              ref={usernameRef}
              className="form-control p-2 mt-3"
              type="text"
              placeholder="Phone number, email address"
              minLength="3"
              autoFocus
              required
            />
            <input
              ref={userPasswordRef}
              className="form-control p-2 mt-3"
              type="password"
              placeholder="Password"
              minLength="4"
              required
            />
            <button
              type="submit"
              className="btn w-100 mt-3 mb-4 ms-4 align-items-center"
            >
              Log in
            </button>
          </form>
          <div className="d-flex justify-content-between">
            <Link className="" to="/">
              Forgot password?
            </Link>
            <Link className="signUpLink" to="/signUp">
              Sign up to Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
