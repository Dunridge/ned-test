const FinancingResults = ({ config }) => {
    return (
        <div className="results">
            <div>
                Anual Business Revenue: ${config?.revenue_amount?.value || 0}
            </div>
            <div>Funding amount: ${config?.funding_amount?.value || 0}</div>
            <div>Fees: (50%) ${config?.funding_amount?.value / 2 || 0}</div>
            <hr />
            <div>
                Total revenue share: $
                {(3 / 2) * config?.funding_amount?.value || 0}
            </div>
            <div>Expected transfers: 47</div>
            <div>
                Expected completion date:{" "}
                <span className="options__results--highlighted">
                    January 24, 2023
                </span>
            </div>
        </div>
    );
};

export default FinancingResults;
