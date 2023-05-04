import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const FinancingPurpose = ({ label, config, setConfig }) => {
    // TODO: consider adding another component for this
    const [purposeItems, setPurposeItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("Marketing");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("0");

    useEffect(() => {
        console.log("config from FinancingPurpose: ", config);
        let categoriesString = config?.use_of_funds?.value;
        let categoryValues = categoriesString?.split("*");
        console.log('categoryValues: ', categoryValues);
        setCategories(categoryValues);
    }, [config]);

    const onCategoryChangeHandler = (event) => {
        console.log('chosen category: ', event.target.value);
        setCategory(event.target.value);
    }

    const onAddPurposeItem = () => {
        // TODO: add uuid
        const newItem = {
            category,
            description,
            amount,
            id: uuid() // TODO: debug this uuid 
        };
        console.log('newItem: ', newItem);
        setPurposeItems([...purposeItems, newItem]);
        // TODO: use the setter for the config to link it to the big config 

        // TODO: update the config if necessary 
        // setConfig(...)
    }

    const onDeletePurposeItem = (idToDelete) => {
        // TODO: add uuid
        console.log("Delete");
        const updatedItems = purposeItems.filter(item => item.id !== idToDelete);
        setPurposeItems(updatedItems);
    }

    return (
        // TODO: correct the BEM namings for the classes
        <label className="field">
            <span>{label}</span>

            {/* Inputs for the form:  */}

            <div className="field__input">
                {/* select for categories */}
                <select 
                    // value={config?.use_of_funds?.value || "0"}
                    value={category}
                    onChange={onCategoryChangeHandler} 
                    >
                        { categories?.map((category, index) => {

                            return (
                                <option key={index}>
                                    {category}
                                </option>
                            );
                        }) }

                </select>
                {/* description */}
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    />
                {/* amount */}
                <input 
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => {
                        setAmount(event.target.value);
                    }}
                    />

                <button onClick={onAddPurposeItem}>+</button>
            </div>

            {/* The items rendered in a loop:  */}

            { purposeItems.map(item => {
                return (
                    <div className="purpose" key={item.id}>
                        <div className="purpose__category">{item.category}</div>
                        <div className="purpose__description">{item.description}</div>
                        <div className="purpose__amount">{item.amount}</div>
                        <button onClick={() => { onDeletePurposeItem(item.id)}}>-</button>
                    </div>
                );
            }) }
        </label>
    );
};

export default FinancingPurpose;
