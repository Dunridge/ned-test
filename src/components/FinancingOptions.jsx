import { useState } from "react";
import Results from "./Results";

const FinancingOptions = () => {
    const [revenue, setRevenue] = useState("0");

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
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Revenue share percentage:</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Revenue shared frequency</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>Desired payment delay</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>

                <label className="options__field">
                    <span>What will you use the funds for?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="text"
                        value={revenue}
                        onChange={(event) => setRevenue(event.target.value)}
                    />
                </label>
            </form>

            <div className="options__results">
                {/* TODO: put it in the results component afterwards */}
                {/* <Results></Results> */}

                <div>Anual Business Revenue {revenue}</div>
                <div>Funding amount {revenue}</div>
                <div>Fees {revenue}</div>
                <hr />
                <div>Total revenue share {revenue}</div>
                <div>Expected transfers {revenue}</div>
                <div>Explected completion date {revenue}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
