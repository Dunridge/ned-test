import { useEffect, useState } from "react";
import FinancingInput from "./form-fields/FinancingInput";
import FinancingRange from "./form-fields/FinancingRange";
import FinancingFrequency from "./form-fields/FinancingFrequency";
import FinancingDelay from "./form-fields/FinancingDelay";
import FinancingPurpose from "./form-fields/financing-purpose/FinancingPurpose";
import FinancingResults from "./FinancingResults";

const FinancingOptions = ({ configuration }) => {
    const [config, setConfig] = useState(configuration || {});

    useEffect(() => {
        const sharePercentage = calculateSharePercentage();

        setConfig((prevConfig) => {

            return {
                ...configuration,
                ...prevConfig,
                revenue_percentage: {
                    ...config.revenue_percentage,
                    value: sharePercentage,
                },
            };
        });
    }, [configuration]);

    const calculateSharePercentage = () => {
        let revenue_amount = config?.revenue_amount?.value || 1;
        let funding_amount = revenue_amount / 3;
        let sharePercentage =
            (0.156 / 6.2055 / revenue_amount) * (funding_amount * 10);
        sharePercentage = Math.round(sharePercentage * 10) / 10;

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

        return sharePercentage;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="options">
            <form className="options__form" onSubmit={handleSubmit}>
                <div className="options__form-container">
                    <div className="options__form-fields">
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

                        <FinancingFrequency
                            label="Revenue Shared Frequency"
                            config={config}
                            setConfig={setConfig}
                        />

                        <FinancingDelay
                            label="Desired Repayment Delay"
                            config={config}
                            setConfig={setConfig}
                        />

                        <FinancingPurpose
                            label="What will you use the funds for?"
                            config={config}
                            setConfig={setConfig}
                        />
                    </div>
                    <FinancingResults config={config} />
                </div>

                <div className="options__controls">
                    <button className="options__controls-cancel" type="cancel">Cancel</button>
                    <button className="options__controls-submit" type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default FinancingOptions;
