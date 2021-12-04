import "./tweets.css";
import { Link } from "react-router-dom";

// Importing images
import BoburPhoto from "../../../images/profile-photo.svg";
import BoburOnSOfa from "../../../images/bobur-on-sofa.svg";

function Tweets() {
  return (
    <div className="">
      <p className="pinned d-block d-flex ms-5">Pinned Tweet</p>
      <ul className="tweets-list list-unstyled mt-3 pe-3">
        <li className="tweets-list__item d-flex ms-4 me-4">
          <div className="tweets-item-userImage m-0">
            <img src={BoburPhoto} alt="user" width="60" height="60" />
          </div>
          <div className="tweets-item__info ms-3">
            <div className="top-word d-flex align-items-center">
              <h4 className="user-name m-0 p-0 me-2">Bobur</h4>
              <Link className="username d-block text-decoration-none" to="/">
                @bobur_mavlonov
              </Link>
            </div>
            <p className="user-plans p-0 m-0">
              4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
              uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
              jismoniy holatni normallashtirishni reja qildim
            </p>
            <ul className="info-logos-list d-flex justify-content-around list-unstyled mt-3">
              <li className="info-logos__item">
                <span className="item__span item__span-1">10</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-2">1</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-3">8</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-4"></span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-5"></span>
              </li>
            </ul>
          </div>
        </li>
        <hr />
        <li className="tweets-list__item d-flex ms-4 me-4">
          <div className="tweets-item-userImage p-0 m-0">
            <img src={BoburPhoto} alt="user" width="60" height="60" />
          </div>
          <div className="tweets-item__info ms-3">
            <div className="top-word d-flex align-items-center">
              <h4 className="user-name m-0 p-0 me-2">Bobur</h4>
              <Link className="username d-block text-decoration-none" to="/">
                @bobur_mavlonov
              </Link>
            </div>
            <p className="user-plans p-0 m-0">
              Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
              deyayotganimizga qarab ham o'tirmaymiz.
              <br />
              <br />
              Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar
              yomonga chiqadi slishkom aqlli odamlar nazdida.
              <br />
              <br />
              Gap faqat biznes trenerlar haqida emas.
            </p>
            <ul className="info-logos-list d-flex justify-content-around list-unstyled mt-3">
              <li className="info-logos__item">
                <span className="item__span item__span-1"></span>
              </li>
              <li className="info-logos__item ps-3">
                <span className="item__span item__span-2">5</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-3">9</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-4"></span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-5"></span>
              </li>
            </ul>
          </div>
        </li>
        <hr />
        <li className="tweets-list__item d-flex ms-4 me-4">
          <div className="tweets-item-userImage p-0 m-0">
            <img src={BoburPhoto} alt="user" width="60" height="60" />
          </div>
          <div className="tweets-item__info ms-3">
            <div className="top-word d-flex align-items-center">
              <h4 className="user-name m-0 p-0 me-2">Bobur</h4>
              <Link className="username d-block text-decoration-none" to="/">
                @bobur_mavlonov
              </Link>
            </div>
            <p className="user-plans p-0 m-0 mb-2">A bo'pti maskamasman</p>
            <img
              className=""
              src={BoburOnSOfa}
              alt="Bobur sitting on sofa"
              width="90%"
              height="75%"
            />
            <ul className="info-logos-list d-flex justify-content-around list-unstyled mt-3">
              <li className="info-logos__item">
                <span className="item__span item__span-1">10</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-2">1</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-3">0</span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-4"></span>
              </li>
              <li className="info-logos__item">
                <span className="item__span item__span-5"></span>
              </li>
            </ul>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Tweets;
