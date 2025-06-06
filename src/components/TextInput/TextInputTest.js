import React, { useCallback, useRef, useState, useId, forwardRef, useImperativeHandle } from "react";
import styles from "./textInput.module.css";

const TextInputTest = ({
  label,
  tooLongMessage,
  badInputMessage,
  tooShortMessage,
  customErrorMessage,
  stepMismatchMessage,
  typeMismatchMessage,
  valueMissingMessage,
  rangeOverflowMessage,
  rangeUnderflowMessage,
  patternMismatchMessage,
  onInput,
  customValidators,
  ...attributes
}, forwardRef) => {
  


  const errMessages = {
    tooLongMessage,
    badInputMessage,
    tooShortMessage,
    customErrorMessage,
    stepMismatchMessage,
    typeMismatchMessage,
    valueMissingMessage,
    rangeOverflowMessage,
    rangeUnderflowMessage,
    patternMismatchMessage,
  };

  const [errMsg, setErrMsg] = useState(null);

  const inputRef = useRef();

  // Expose the same value of the internal inputRef to the forwardRef
  useImperativeHandle(forwardRef, () => inputRef.current);

  const id = useId();

  const onInputHandler = useCallback(
    (e) => {

      // set the input valid for the browser
      inputRef.current.setCustomValidity("");

      // check if input is valid
      let isValid = inputRef.current.checkValidity();

      // if built in validations - valid,  check the custom validate - of the repeat pass filed
      if (isValid && customValidators?.length > 0) {
        // run the customValidators arr at forEch loop
        //get the arr func [ firat item ], and err msg [ second item ]
        // if the func that repeatCheck func return is valid [ get at the () - the current input repeat pass value ]
        const firstErr = customValidators.find(
          ([customFunc, customMsg]) =>
            customFunc(inputRef.current.value) === false
        );

        if (firstErr) {
          // set isValid to false - we dont want to empty errMsg state, down stares
          isValid = false;

          // put the err msg at the state
          setErrMsg(firstErr[1]);

          // set the input not valid for the browser
          inputRef.current.setCustomValidity(firstErr[1]);

        }
      }

      // if valid clear the err msg
      if (isValid) {
        console.log(errMsg);

        // if has err msg - clear the state [errMsg]
        if (errMsg) {
          setErrMsg(null);

          // set the custom vaild msg at the browser empty and valid 
          inputRef.current.setCustomValidity("");
        }
      }

      onInput && onInput(e);
    },
    [errMsg]
  );

  const onInvalidHandler = useCallback(
    (e) => {
      e.preventDefault();

      const validityState = inputRef.current.validity;

      let inValidReason = null;

      for (let i in validityState) {
        if (validityState[i]) {
          inValidReason = i;

          setErrMsg(
            errMessages[`${i}Message`] || inputRef.current.validationMessage
          );
          break;
        }
      }
    },
    [errMsg]
  );

  return (
    <div className={styles.wrapInput}>
      <label htmlFor={id}>{label}</label>
      <input
        {...attributes}
        id={id}
        ref={inputRef}
        onInput={onInputHandler}
        onInvalid={onInvalidHandler}
      />

      {errMsg ? <div className={styles.errMsg}>{errMsg}</div> : null}
    </div>
  );
};



const TextInputTestWithRef = forwardRef(TextInputTest);
export default TextInputTestWithRef;

// כל האפשרויות שיש ב
// validity state:

// tooLongMessage, -- for maxlength
// badInputMessage, --
// tooShortMessage, -- for minlength
// customErrorMessage, -- הודעה מותאמת
// stepMismatchMessage, -- in input range in steps
// typeMismatchMessage, -- type of content not match [ email, tel]
// valueMissingMessage, -- for reqiured
// rangeOverflowMessage,
// rangeUnderflowMessage,
// patternMismatchMessage, -- not match to pattern [ regEx ]
