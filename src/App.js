import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
          alt=""
        />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <div className="content__img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg"
            alt=""
          />
        </div>
        <div>
          ava + info
        </div>
        <div>
          my post
        </div>
        <ul>
          <li>post 1</li>
          <li>post 2</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
