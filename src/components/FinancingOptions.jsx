import { useEffect, useMemo, useState } from "react";
import FinancingInput from "./form-fields/FinancingInput";
import FinancingRange from "./form-fields/FinancingRange";
import FinancingFrequency from "./form-fields/FinancingFrequency";
import FinancingDelay from "./form-fields/FinancingDelay";
import FinancingPurpose from "./form-fields/financing-purpose/FinancingPurpose";
import FinancingResults from "./FinancingResults";

const FinancingOptions = ({ configuration }) => {
    const [config, setConfig] = useState(configuration || {});
    const [fundingAmount, setFundingAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const sharePercentage = useMemo(() => {
        let revenue_amount = config?.revenue_amount?.value || 1;
        let funding_amount = revenue_amount / 3;
        setFundingAmount(funding_amount);
        let sharePercentage =
            (0.156 / 6.2055 / revenue_amount) * (funding_amount * 10);
        sharePercentage = Math.round(sharePercentage * 10) / 10;

        return sharePercentage;
    }, [config?.revenue_amount?.value]);

    useEffect(() => {
        
        setConfig((prevConfig) => {
            return {
                ...configuration,
                ...prevConfig,
                revenue_percentage: {
                    ...config.revenue_percentage,
                    value: sharePercentage,
                },
                funding_amount: {
                    ...config.funding_amount,
                    value: fundingAmount // funding_amount,
                },
            };
        });
    },
    // eslint-disable-next-line
    [sharePercentage, fundingAmount]
    // [configuration, config, sharePercentage, fundingAmount]
    // [configuration, config, config.funding_amount, config?.revenue_amount?.value, config.revenue_percentage]
    // [configuration]
    );
    // [configuration, config.revenue_percentage, config.funding_amount]

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
                    <button className="options__controls-cancel" type="cancel">
                        Cancel
                    </button>
                    <button className="options__controls-submit" type="submit">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FinancingOptions;
