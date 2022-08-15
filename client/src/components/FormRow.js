const FormRow = ({ type, name, value, onChange, onBlur, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
