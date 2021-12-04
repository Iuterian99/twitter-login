import "./Right.css";
import { Link } from "react-router-dom";

// Importing images
import RightFirst from "../../../images/bobur-on-sofa.svg";
import RightSecond from "../../../images/right-second.png";
import RightThird from "../../../images/right-third.png";
import RightFourth from "../../../images/right-fourth.png";
import RightFifth from "../../../images/right-fifth.png";
import RightSix from "../../../images/right-six.png";
import Mushtariy from "../../../images/mushtariy.png";
import Shuxratbek from "../../../images/shuxratbek.png";

function Right() {
  return (
    <div className="border-start">
      <div className="container p-0 ms-3">
        <div className="row">
          <div className="col-12 p-0">
            <form className="right-form mt-4">
              <label className="right-input__label w-100">
                <input
                  className="right-input ps-5"
                  type="text"
                  placeholder="Search Twitter"
                />
              </label>
            </form>
          </div>
          <ul className="right list list-unstyled d-flex flex-wrap p-0 mt-2 ms-1">
            <li className="right-item">
              <img
                src={RightFirst}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
            <li className="right-item">
              <img
                src={RightSecond}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
            <li className="right-item">
              <img
                src={RightThird}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
            <li className="right-item">
              <img
                src={RightFourth}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
            <li className="right-item">
              <img
                src={RightFifth}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
            <li className="right-item">
              <img
                src={RightSix}
                alt="Proposed user images"
                width="100"
                height="68"
              />
            </li>
          </ul>
        </div>
        <div className="row proposed-people p-2">
          <div className="col-12 p-0">
            <h3 className="proposed-people__heading ms-1">You might like</h3>
            <ul className="proposed-people__list list-unstyled">
              <li className="proposed-people__list d-flex justify-content-around">
                <img src={Mushtariy} alt="" width="50" height="50" />
                <div className="top-words ms-2">
                  <h4 className="proposed__user-name m-0 p-0">Mushtariy</h4>
                  <Link
                    className="username d-block text-decoration-none"
                    to="/"
                  >
                    @Mushtar565266
                  </Link>
                </div>
                <button
                  type="submit"
                  className="proposed-people__btn text-light"
                >
                  Follow
                </button>
              </li>
              <li className="proposed-people__list d-flex justify-content-around mt-4">
                <img src={Shuxratbek} alt="" width="50" height="50" />
                <div className="top-words ms-2">
                  <h4 className="proposed__user-name m-0 p-0">Shuhratbek</h4>
                  <Link
                    className="username d-block text-decoration-none"
                    to="/"
                  >
                    @mrshukhrat
                  </Link>
                </div>
                <button
                  type="submit"
                  className="proposed-people__btn text-light"
                >
                  Follow
                </button>
              </li>
            </ul>
            <Link to="/" className="showMoreBtn text-decoration-none">
              Show more
            </Link>
          </div>
        </div>
        <div className="row proposed-people p-2 mt-3">
          <div className="col-12 p-0">
            <div className="trends">
              <h3 className="proposed-people__heading ms-1">Trends for you</h3>
              <p className="Trend-place threeDots m-0">Trending in Germany</p>
              <p className="revolution m-0">Revolution</p>
              <p className="Trend-place m-0">50.4K Tweets</p>
            </div>
            <div className="trends mt-3">
              <p className="Trend-place threeDots m-0">Trending in Germany</p>
              <p className="revolution m-0">Revolution</p>
              <p className="Trend-place m-0">50.4K Tweets</p>
            </div>
            <div className="trends mt-3 mb-2">
              <p className="Trend-place threeDots m-0">Trending in Germany</p>
              <p className="revolution m-0">Revolution</p>
              <p className="Trend-place m-0">50.4K Tweets</p>
            </div>
            <Link to="/" className="showMoreBtn text-decoration-none">
              Show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
