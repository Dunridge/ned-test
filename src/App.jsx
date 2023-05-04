import Header from "./components/Header";
import FinancingOptions from "./components/FinancingOptions";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    const [configuration, setConfiguration] = useState({});
    // as the options are stored in the value parameter with the `*` 
    // delimiter - I'll store the data in the placeholder property since it is empty

    useEffect(() => {
        // some malfunction with the endpoint
        fetch(
            "https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json"
        )
            .then((response) => response.json())
            .then((configuration) => {
                let formattedConfiguration = {};
                configuration.forEach(property => {
                    formattedConfiguration = {
                        ...formattedConfiguration,
                        [property.name]: property
                    }
                })
                console.log('formattedConfiguration', formattedConfiguration);
                setConfiguration(formattedConfiguration);
                // console.log(configuration);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="app">
            <Header></Header>
            <FinancingOptions configuration={configuration}></FinancingOptions>
            {/* TODO: or add the footer buttons to the app to avoid complexity */}
            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
