const FinancingRange = ({ label, config, setConfig }) => {
    return (
        <div className="options__range">
            <label>
                <span>{label}</span>
                {/* TODO: make it a field that has to be filled out */}
                <div className="options__range-section">
                    <input
                        type="range"
                        min={`${config?.funding_amount_min?.value}` || "0"}
                        max={`${config?.funding_amount_max?.value}` || "1000"}
                        value={config?.funding_amount?.value || 0} // config.revenueAmount.placeholder
                        onChange={(event) => {
                            // console.log("config", config);
                            // console.log("event.target.value: ", event.target.value);
                            setConfig({
                                ...config,
                                funding_amount: {
                                    ...config.funding_amount,
                                    value: event.target.value,
                                },
                            });
                        }}
                    />
                    <div>{config?.funding_amount?.value || 0}</div>
                </div>
            </label>
        </div>
    );
};

export default FinancingRange;
