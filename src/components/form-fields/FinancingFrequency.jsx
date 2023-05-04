import { useEffect, useState } from "react";

const FinancingFrequency = ({ label, config, setConfig }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState([]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        let frequency = config?.revenue_shared_frequency?.value;
        const options = frequency?.split("*");
        setOptions(options);
    }, [config]);

    return (
        <label className="options__field">
            <span>{label}</span>

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
