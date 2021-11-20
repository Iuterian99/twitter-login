import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

// Components
import FirstPage from "./components/First-Page/FirstPage";
import Signup from "./components/SignUp-Page/SignUp";
import ProfileNavbar from "./components/Profile/Profile-Navbar";

function App() {
  return (
    <>
      {/* <Switch>
        <Route path="/" component={FirstPage} exact />
        <Route path="/signUp" component={Signup} />
      </Switch> */}
      <ProfileNavbar />
    </>
  );
}

export default App;
