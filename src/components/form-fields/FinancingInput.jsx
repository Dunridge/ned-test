const FinancingInput = ({ config, setConfig }) => {
    return (
        <>
            <label className="options__field">
                <span>What is your annual business revenue?</span>
                {/* TODO: make it a field that has to be filled out */}
                <input
                    type="number"
                    placeholder={config?.revenueAmount?.placeholder}
                    value={config?.revenueAmount?.value || 0} // config.revenueAmount.placeholder
                    onChange={(event) => {
                        console.log("config", config);
                        console.log("event.target.value: ", event.target.value);
                        setConfig({
                            ...config,
                            revenueAmount: {
                                ...config.revenueAmount,
                                value: event.target.value,
                            },
                        });
                    }}
                />
            </label>
        </>
    );
};

export default FinancingInput;
