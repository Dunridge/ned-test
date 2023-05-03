import { useEffect, useState } from "react";

const FinancingFrequency = ({ label, config, setConfig }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState([]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        console.log("config from frequency: ", config);
        let frequency = config?.revenue_shared_frequency?.value;
        console.log("frequency: ", frequency);
        const options = frequency?.split("*");
        console.log("options", options);
        setOptions(options);
    }, [config]);

    return (
        <label className="options__field">
            <span>{label}</span>
            {/* TODO: add the options here */}

            {options?.map((option, index) => {
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name={option}
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        {option}
                    </label>
                );
            })}
        </label>
    );
};

export default FinancingFrequency;
