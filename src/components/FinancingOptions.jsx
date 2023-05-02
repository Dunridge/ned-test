import { useState } from "react";

// the endpoint returns an error - failed to fetch
const FinancingOptions = ({ configuration }) => {
    console.log("configuration at input", configuration); // works
    const [config, setConfig] = useState(configuration);
    const [revenue, setRevenue] = useState(
        config?.revenueAmount?.value || "400"
    );
    const [desiredLoan, setDesiredLoan] = useState(
        config?.fundingAmountMin?.value || "0"
    );

    const [revenueShare, setRevenueShare] = useState(
        config?.revenuePercentage?.value || "7.56%"
    );

    const [revenueFrequency, setRevenueFrequency] = useState(
        config?.revenueSharedFrequency?.value || "7.56%"
    );

    const [repaymentDelay, setRepaymentDelay] = useState(
        config?.desiredRepaymentDelay?.value || "7.56%"
    );

    const [fundsPurpose, setFundsPurpose] = useState(
        config?.useOfFunds?.value || "7.56%"
    );

    const [selectedFrequencyOption, setSelectedFrequencyOption] = useState(
        "Weekly"
    );

    const [selectedPaymentDelay, setSelectedPaymentDelay] = useState();

    // TODO: WIP
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(configuration);
        console.log("config", config);
        // TODO: define the submit if the logic demands it (for now the data is reflected on the UI at once)
    };

    const handleFrequencyOptionChange = (event) => {
        setSelectedFrequencyOption(event.target.value);
        // setRepaymentDelay(event.target.value);
    };

    const handlePaymentDelayChange = () => {
        // TODO: continue defining the payment delay change
    }

    return (
        <div className="options">
            <form className="options__form" onSubmit={handleSubmit}>
                {/* TODO: put these fields into components */}

                {/* annual business revenue */}
                <label className="options__field">
                    <span>What is your annual business revenue?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="number"
                        value={revenue}
                        onChange={(event) => {
                            console.log("config", config);
                            setRevenue(event.target.value);
                        }}
                    />
                </label>

                {/* desired loan amount */}
                <label className="options__field">
                    <span>What is your desired loan amount?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="range"
                        value={desiredLoan}
                        min={config?.fundingAmountMin?.value || 0}
                        max={config?.fundingAmountMax?.value || 100}
                        onChange={(event) => setDesiredLoan(event.target.value)}
                    />
                </label>

                {/* revenue share percentage */}
                <label className="options__field">
                    <span>
                        Revenue share percentage:{" "}
                        {config?.revenuePercentage || "70%"}
                    </span>
                    {/* TODO: make it a field that has to be filled out */}
                    {/* <input
                        type="text"
                        value={revenueShare}
                        onChange={(event) => setRevenueShare(event.target.value)}
                    /> */}
                </label>

                {/* Revenue shared frequency */}
                <label className="options__field">
                    <span>Revenue shared frequency</span>

                    <div className="options__frequencies">
                        <div>
                            <input
                                type="radio"
                                id="option1"
                                name="options"
                                value="Monthly"
                                checked={selectedFrequencyOption === "Monthly"}
                                onChange={handleFrequencyOptionChange}
                            />
                            <label htmlFor="option1">Monthly</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="option2"
                                name="options"
                                value="option2"
                                checked={selectedFrequencyOption === "option2"}
                                onChange={handleFrequencyOptionChange}
                            />
                            <label htmlFor="option2">Weekly</label>
                        </div>
                    </div>
                </label>

                {/* Desired payment delay         */}
                <label className="options__field">
                    <span>Desired payment delay</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <select 
                        id="options" 
                        value={repaymentDelay}
                        onChange={(event) =>
                            setRepaymentDelay(event.target.value)
                        }
                        >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    
                    {/* <input
                        type="text"
                        value={repaymentDelay}
                        onChange={(event) =>
                            setRepaymentDelay(event.target.value)
                        }
                    /> */}
                </label>

                {/* funds for */}
                <label className="options__field">
                    <span>What will you use the funds for?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={fundsPurpose}
                        onChange={(event) =>
                            setFundsPurpose(event.target.value)
                        }
                    />
                </label>

                {/* TODO: hide this button after testing */}
                <button type="submit">Submit</button>
            </form>

            <div className="options__results">
                {/* TODO: put it in the results component afterwards */}
                {/* <Results></Results> */}

                <div>Anual Business Revenue {revenue}</div>
                <div>Funding amount {desiredLoan}</div>
                <div>Fees {revenueShare}</div>
                <hr />
                <div>Total revenue share {revenueFrequency}</div>
                <div>Expected transfers {repaymentDelay}</div>
                <div>Explected completion date {fundsPurpose}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
