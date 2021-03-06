import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="top">
        <Banner />
        <Login />
      </div>
    </div>
  );
}

export default App;
