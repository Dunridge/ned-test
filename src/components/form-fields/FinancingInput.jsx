const FinancingInput = ({ label, config, setConfig }) => {
    return (
        <>
            <label className="options__field">
                <span>{ label }</span>
                {/* TODO: make it a field that has to be filled out */}
                <input
                    type="number"
                    placeholder={config?.revenue_amount?.placeholder}
                    value={config?.revenue_amount?.value || 0} // config.revenueAmount.placeholder
                    onChange={(event) => {
                        console.log("config", config);
                        console.log("event.target.value: ", event.target.value);
                        setConfig({
                            ...config,
                            revenue_amount: {
                                ...config.revenue_amount,
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
