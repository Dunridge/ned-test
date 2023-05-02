import Header from "./components/Header";
import FinancingOptions from "./components/FinancingOptions";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [configuration, setConfiguration] = useState({});

  // fetch data from https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json')
      .then((response) => response.json())
      .then((configuration) => {
        console.log('configuration', configuration);
        setConfiguration(configuration)
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="app">
      <Header></Header>
      {/* <div className="app__body"> */}
        <FinancingOptions configuration={configuration}></FinancingOptions>
      {/* </div> */}
      {/* TODO: or add the footer buttons to the app to avoid complexity */}
      <Footer></Footer>
    </div>
  );
}

export default App;
