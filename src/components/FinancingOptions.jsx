import { useEffect, useState } from "react";
import FinancingInput from "./form-fields/FinancingInput";
import FinancingRange from "./form-fields/FinancingRange";
import FinancingFrequency from "./form-fields/FinancingDelay";
import FinancingDelay from "./form-fields/FinancingDelay";

// the endpoint returns an error - failed to fetch
const FinancingOptions = ({ configuration }) => {
    console.log("configuration at input", configuration); // works

    // TODO: the config object is not being set here
    const [config, setConfig] = useState(configuration || {}); // || {}

    // track the changes of the configuration to triggr useEffect several times
    // TODO: this piece of code rewrites the object
    useEffect(() => {
        const sharePercentage = calculateSharePercentage();

        setConfig((prevConfig) => {
            console.log('prevConfig', prevConfig);
            // TODO: add configuration here as a spread
            console.log('configuration in effect:', configuration);
            
            return {
                ...configuration, // can cause issues - TODO: figure out why this is not set in the hook 
                ...prevConfig,
                revenue_percentage: {
                    ...config.revenue_percentage,
                    value: sharePercentage,
                },
            };
        });
    }, [configuration]);
    console.log("config after set: ", config);
    // console.log("config", config.revenueAmount.value);

    const calculateSharePercentage = () => {
        let revenue_amount = config?.revenue_amount?.value || 1;

        let funding_amount = revenue_amount / 3;
        // let funding_amount = config?.funding_amount?.value || 1;

        console.log("revenue_amount", revenue_amount);
        console.log("funding_amount", funding_amount);

        let sharePercentage =
            (0.156 / 6.2055 / revenue_amount) * (funding_amount * 10);
        sharePercentage = Math.round(sharePercentage * 10) / 10;
        // TODO: set config?.revenue_percentage?.value

        console.log("sharePercentage", sharePercentage);

        setConfig({
            ...config,
            revenue_percentage: {
                ...config.revenue_percentage,
                value: sharePercentage,
            },
            funding_amount: {
                ...config.funding_amount,
                value: funding_amount,
            },
        });

        console.log("share percentage from function: ", config);

        return sharePercentage;
    };

    // TODO: WIP
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("configuration", configuration);
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

                <div>
                    Revenue share percentage:{" "}
                    {config?.revenue_percentage?.value || 0}%
                </div>

                {/* TODO: add the FinancingFrequency component here here */}

                <div>Revenue Shared Frequency: ...</div>

                {/* TODO: continue working on the financing frequency */}
                {/* TODO: rename this component to FinancingDelay */}
                <FinancingDelay
                    label="Desired Repayment Delay"
                    config={config}
                    setConfig={setConfig}
                />

                <button type="submit">Submit</button>
            </form>

            <div>
                <div>
                    Anual Business Revenue: $
                    {config?.revenue_amount?.value || 0}
                </div>
                <div>Funding amount: ${config?.funding_amount?.value || 0}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
