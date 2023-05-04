const FinancingRange = ({ label, config, setConfig }) => {

    return (
        <div className="options__range">
            <label>
                <span>{label}</span>
                <div className="options__range-section">
                    <div className="options__range-input">
                        <div className="options__range-values">
                            <div className="options__range-value">{ 0 }</div>
                            <div className="options__range-value">{ 1/3 * config?.revenue_amount?.value }</div>
                        </div>
                        <input
                            type="range"
                            min={"0"} // not specified in the conditions
                            max={
                                `${1/3 * config?.revenue_amount?.value}` || "1000"
                            }
                            value={config?.funding_amount?.value || 0}
                            onChange={(event) => {
                                setConfig({
                                    ...config,
                                    funding_amount: {
                                        ...config.funding_amount,
                                        value: event.target.value,
                                    },
                                });
                            }}
                        />
                    </div>
                    <div>{config?.funding_amount?.value || 0}</div>
                </div>
            </label>
        </div>
    );
};

export default FinancingRange;
