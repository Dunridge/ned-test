import { useEffect, useState } from "react";

const FinancingDelay = ({ label, config, setConfig }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        console.log(config);
        let frequency = config?.desired_repayment_delay?.value;

        const options = frequency?.split("*");
        console.log("Frequency: ", frequency);
        console.log('options', options); // ['30 days', '60 days', '90 days']
        setOptions(options);
        // debugger;
    }, [config]);
    // console.log('config from financing', config);

    // store the chosen value in the placeholder as it's empty
    const onOptionChangeHandler = (event) => {
        console.log('chosen option: ', event.target.value);
        // TODO: set the config value with the setter and update the output on UI
        setConfig({
            ...config,
            desired_repayment_delay: {
                ...config.desired_repayment_delay,
                // value: event.target.value
                placeholder: event.target.value // store it in the placeholder for future use
            }
        });
    }

    return ( 
        <>
            {/* <div>Test</div> */}
            {/* <div>{config}</div> */}
            {/* <div>{config?.desired_repayment_delay?.name}</div> */}
            {/* <div>{config?.desired_repayment_delay?.value}</div> */}
            {/* TODO: check the endpoint and whether it's working */}
            <label className="options__field">
                <span>{ label }</span>
                <select value={config?.desired_repayment_delay?.value || 0}
                        onChange={onOptionChangeHandler} 
                        id="">
                            { options?.map((option, index) => {

                                return (
                                    <option key={index}>
                                        {option}
                                    </option>
                                );
                            }) }
                </select>
            </label>
        </>
     );
}
 
export default FinancingDelay;