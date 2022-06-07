function TextArea({ label, name, rows, placeholder, value, onChange }) {
    return (
        <label>
            {label}
            <textarea
              name={name}
              rows={rows}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            ></textarea>
        </label>
    )
}

export default TextArea
