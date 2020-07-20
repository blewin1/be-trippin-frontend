import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/layout/Nav/Nav";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer/Footer";
// App style of height: 100vh is for giving context to side menus
function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
