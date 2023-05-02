import { useState } from "react";

const FinancingOptions = () => {
    const [revenue, setRevenue] = useState("0");
    const [desiredLoan, setDesiredLoan] = useState("0");
    const [revenueShare, setRevenueShare] = useState("0");
    const [revenueFrequency, setRevenueFrequency] = useState("0");
    const [repaymentDelay, setRepaymentDelay] = useState("0");
    const [fundsPurpose, setFundsPurpose] = useState("0");

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: define the submit if the logic demands it (for now the data is reflected on the UI at once)
    };

    return (
        <div className="options">
            <form className="options__form" onSubmit={handleSubmit}>
                {/* TODO: put these fields into components */}
                <label className="options__field">
                    <span>What is your annual business revenue?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>What is your desired loan amount?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={desiredLoan}
                        onChange={(event) => setDesiredLoan(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Revenue share percentage:</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenueShare}
                        onChange={(event) => setRevenueShare(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Revenue shared frequency</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenueFrequency}
                        onChange={(event) => setRevenueFrequency(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Desired payment delay</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={repaymentDelay}
                        onChange={(event) => setRepaymentDelay(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>What will you use the funds for?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={fundsPurpose}
                        onChange={(event) => setFundsPurpose(event.target.value)}
                    />
                </label>
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
