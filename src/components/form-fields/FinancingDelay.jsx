import { useEffect, useState } from "react";

const FinancingDelay = ({ label, config, setConfig }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        let frequency = config?.desired_repayment_delay?.value;
        const options = frequency?.split("*");
        setOptions(options);
    }, [config]);

    const onOptionChangeHandler = (event) => {
        setConfig({
            ...config,
            desired_repayment_delay: {
                ...config.desired_repayment_delay,
                placeholder: event.target.value
            }
        });
    }

    return ( 
        <>
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