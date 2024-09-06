

const TextInput = ({type, name, placeholder}) => {
  return (
    <label>
        <input type={type} name={name} placeholder={placeholder} />
    </label>
  )
}

export default TextInput