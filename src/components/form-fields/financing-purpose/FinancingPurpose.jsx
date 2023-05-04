import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const FinancingPurpose = ({ label, config, setConfig }) => {
    const [purposeItems, setPurposeItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("Marketing");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("0");

    useEffect(() => {
        let categoriesString = config?.use_of_funds?.value;
        let categoryValues = categoriesString?.split("*");
        setCategories(categoryValues);
    }, [config]);

    const onCategoryChangeHandler = (event) => {
        setCategory(event.target.value);
    }

    const onAddPurposeItem = () => {
        const newItem = {
            category,
            description,
            amount,
            id: uuid()
        };
        setPurposeItems([...purposeItems, newItem]);
    }

    const onDeletePurposeItem = (idToDelete) => {
        const updatedItems = purposeItems.filter(item => item.id !== idToDelete);
        setPurposeItems(updatedItems);
    }

    return (
        <label className="field">
            <span>{label}</span>

            <div className="field__input">
                <select 
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
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    />
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
