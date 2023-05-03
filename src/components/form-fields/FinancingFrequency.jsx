import { useEffect } from "react";

const FinancingFrequency = ({ label, config, setConfig }) => {

    // useEffect(() => {
    //     console.log(config);
    //     let frequency = config?.desired_repayment_delay?.value;
    //     // debugger;
    //     console.log("Frequency: ", frequency);
    // }, []);
    console.log('config from financing', config);

    return ( 
        <>
            <div>Test</div>
            {/* <div>{config}</div> */}
            {/* <div>{config?.desired_repayment_delay?.name}</div> */}
            <div>{config?.desired_repayment_delay?.value}</div>
            {/* TODO: check the endpoint and whether it's working */}
            {/* <label className="options__field">
                <span>{ label }</span>
                <select value={config?.desired_repayment_delay?.value || 0} 
                        id="">


                </select>
            </label> */}
        </>
     );
}
 
export default FinancingFrequency;