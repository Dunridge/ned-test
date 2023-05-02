import { useEffect, useState } from "react";
import FinancingInput from './form-fields/FinancingInput';
import FinancingRange from './form-fields/FinancingRange';

// the endpoint returns an error - failed to fetch
const FinancingOptions = ({ configuration }) => {
    console.log("configuration at input", configuration); // works
    const [config, setConfig] = useState(configuration || {});
    // track the changes of the configuration to triggr useEffect several times
    useEffect(() => {
        const sharePercentage = calculateSharePercentage();
        setConfig((prevConfig) => ({
            ...prevConfig,
            revenue_percentage: {
                ...config.revenue_percentage,
                value: sharePercentage
            }
        }));
        // TODO: fire the calculation function here 
    }, [configuration]);
    console.log("config after set: ", config);
    // console.log("config", config.revenueAmount.value);

    const calculateSharePercentage = () => {
        let revenue_amount = config?.revenue_amount?.value || 1;
        
        let funding_amount = revenue_amount / 3;
        // let funding_amount = config?.funding_amount?.value || 1;

        console.log('revenue_amount', revenue_amount);
        console.log('funding_amount', funding_amount);

        let sharePercentage = (0.156 / 6.2055 / revenue_amount) * (funding_amount * 10);
        sharePercentage = Math.round(sharePercentage * 10) / 10;
        // TODO: set config?.revenue_percentage?.value

        console.log('sharePercentage', sharePercentage);

        setConfig({
            ...config, 
            revenue_percentage: {
                ...config.revenue_percentage,
                value: sharePercentage
            },
            funding_amount: {
                ...config.funding_amount,
                value: funding_amount
            }
        });

        console.log("share percentage from function: ", config);

        return sharePercentage;
    }

    // TODO: WIP
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('configuration', configuration);
        console.log("config", config);
        // console.log("revenueAmount", config.revenueAmount.placeholder);
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
                {/* TODO: add the percentage via this formula that is stored here */}
                {/* revenue_amount = config?.revenue_amount?.value */}
                {/* funding_amount = config?.funding_amount?.value */}
                {/* (0.156 / 6.2055 / revenue_amount) * (funding_amount * 10)" */}
                {/* TODO: calculate the amount here and reset to for the config object with the setter */}
                {/* <button onClick={calculateSharePercentage}>Calculate</button> */}
                <div>Revenue share percentage: {config?.revenue_percentage?.value || 0}%</div>
                {/* <div>Revenue share percentage: { calculateSharePercentage() || 0}%</div> */}
            
                <button type="submit">Submit</button>
            </form>

            <div>
                <div>Anual Business Revenue: ${config?.revenue_amount?.value || 0}</div>
                <div>Funding amount: ${config?.funding_amount?.value || 0}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
