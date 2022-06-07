function RadioInput({ label, name, value, checkedOption, onChange }) {
    return (    
        <label>
            <input type="radio" name={name} value={value} onChange={onChange} checked={checkedOption === value} />
            {label}
        </label>
    )
}

export default RadioInput
