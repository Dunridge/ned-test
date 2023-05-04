const FinancingInput = ({ label, config, setConfig }) => {
    return (
        <>
            <label className="options__field">
                <span>{ label }</span>
                <input
                    type="number"
                    placeholder={config?.revenue_amount?.placeholder}
                    value={config?.revenue_amount?.value || 0}
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
