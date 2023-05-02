import { useEffect, useState } from "react";
import FinancingInput from './form-fields/FinancingInput';
import FinancingRange from './form-fields/FinancingRange';

// the endpoint returns an error - failed to fetch
const FinancingOptions = ({ configuration }) => {
    console.log("configuration at input", configuration); // works
    const [config, setConfig] = useState(configuration || {});
    // track the changes of the configuration to triggr useEffect several times
    useEffect(() => {
        setConfig(configuration);
    }, [configuration]);
    console.log("config after set: ", config);
    // console.log("config", config.revenueAmount.value);

    // TODO: WIP
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('configuration', configuration);
        console.log("config", config);
        console.log("revenueAmount", config.revenueAmount.placeholder);
        // TODO: define the submit if the logic demands it (for now the data is reflected on the UI at once)
    };

    return (
        <div className="options">
            <form className="options__form" onSubmit={handleSubmit}>
                <FinancingInput
                    label="What is your annual business revenue?" 
                    config={config} 
                    setConfig={setConfig} 
                />
                <FinancingRange
                    label="What is your desired loan amount?"
                    config={config} 
                    setConfig={setConfig} 
                />
            
                <button type="submit">Submit</button>
            </form>

            <div>
                <div>Anual Business Revenue: ${config?.revenue_amount?.value || 0}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
