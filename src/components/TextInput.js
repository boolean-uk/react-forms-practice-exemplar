function TextInput({ label, type, name, value, onChange, required = false }) {
    return (
        <label>
            {label}

            {required && <input type={type} name={name} value={value} onChange={onChange} required />}
            {!required && <input type={type} name={name} value={value} onChange={onChange} />}
        </label>
    )
}

export default TextInput
