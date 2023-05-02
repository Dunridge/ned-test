import Header from "./components/Header";
import FinancingOptions from "./components/FinancingOptions";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  // fetch data from https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json

  return (
    <div className="app">
      <Header></Header>
      {/* <div className="app__body"> */}
        <FinancingOptions></FinancingOptions>
      {/* </div> */}
      {/* TODO: or add the footer buttons to the app to avoid complexity */}
      <Footer></Footer>
    </div>
  );
}

export default App;
