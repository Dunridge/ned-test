import { useEffect, useState } from "react";

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
            <label className="options__field">
                    <span>What is your annual business revenue?</span>
                    {/* TODO: make it a field that has to be filled out */}
                    <input
                        type="number"
                        placeholder={config?.revenueAmount?.placeholder}
                        value={config?.revenueAmount?.value} // config.revenueAmount.placeholder
                        onChange={(event) => {
                            console.log("config", config);
                            console.log("event.target.value: ", event.target.value);
                            setConfig({
                                ...config,
                                revenueAmount: {
                                    ...config.revenueAmount,
                                    value: event.target.value
                                }
                            });
                        }}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            <div>
                <div>Anual Business Revenue: ${config?.revenueAmount?.value || 0}</div>
            </div>
        </div>
    );
};

export default FinancingOptions;
