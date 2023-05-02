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
        // console.log('configuration', configuration);
        // console.log('field', configuration[0]);

        let formattedConfiguration = {
          desiredFeePercentage: configuration[0],
          desiredRepaymentDelay: configuration[1],
          fundingAmount: configuration[2],
          revenueAmount: configuration[3],
          revenuePercentage: configuration[4],
          revenueSharedFrequency: configuration[5],
          useOfFunds: configuration[6],
          fundingAmountMax: configuration[7],
          fundingAmountMin: configuration[8],
          revenuePercentageMin: configuration[9],
          revenuePercentageMax: configuration[10]
        };

        console.log('formattedConfiguration: ', formattedConfiguration);

        // setConfiguration(configuration)
        setConfiguration(formattedConfiguration);
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
