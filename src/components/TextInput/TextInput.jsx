"use client";

import { useRef } from "react";


const TextInput = ({ type, name, placeholder, required=false }) => {

  const inputRef = useRef();

  const validateEmpty =() => {
      return inputRef.current.value == '';
  }

  // להמשיך ולידציה של שדות ריקים 


  return (
    <label>
        <input type={type} name={name} placeholder={placeholder} onBlur={required? validateEmpty : null} ref={inputRef} />
    </label>
  )
}

export default TextInput