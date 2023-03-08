import reactLogo from "./assets/react.svg";
import "./App.css";
import SideBar from "./assets/component/side-bar";
import Contacts from "./assets/component/contact-box";
import Content from "./assets/component/content";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">
          <div className="App-side-bar">
            <SideBar />
          </div>
          <div className="App-content">
            <div className="App-content-cover">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
