import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />{" "}
        {/* <Navbar state={props.state.navbar} />{" "} */}
        <main className="app-content">
          <Route
            path="/profile"
            render={() => <Profile />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer/>}
          />
          <Route path="/news" component={News} />{" "}
          <Route path="/music" component={Music} />{" "}
          <Route path="/settings" component={Settings} />{" "}
        </main>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
