import "./SignUp.css";
import Logo from "../../images/twitter-logo.svg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <img
        className="d-block mx-auto mt-2"
        src={Logo}
        alt="Twitter Logo"
        width="40"
        height="33"
      />
      <form className="m-3">
        <h1 className="signUp-heading mb-3">Create an account</h1>
        <input
          className="form-control w-100 mb-4"
          type="text"
          placeholder="Name"
          autoFocus
        />
        <input
          className="form-control w-100"
          type="tel"
          placeholder="Phone number"
        />
        <Link className="d-block mt-4 mb-4" to="/">
          Use email
        </Link>
        <h4 className="date-heading">Date of birth</h4>
        <p className="date-info">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <div className="row">
          <div className="col-6">
            <select className="form-select">
              <option value="month" selected disabled>
                Month
              </option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="aprel">Aprel</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div className="col-3">
            <select className="form-select">
              <option value="day" selected disabled>
                Day
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
          <div className="col-3">
            <select className="form-select">
              <option value="day" selected disabled>
                Year
              </option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button className="btn btn-info mt-4 w-100">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
