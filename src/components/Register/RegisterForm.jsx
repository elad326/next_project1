"use client";

import TextInput from "../TextInput/TextInputTest";
import { registerToDB } from '@/lib/actions';
import useActionState from '@/hooks/useActionState';
import styles from './registerForm.module.css';
import { useRef, useState } from "react";




const repeatCheck = (ref) => {
  return (inputVal) => inputVal === ref.current.value;
}

const RegisterForm = () => {

  const [state, formAction] = useActionState(registerToDB, null);

  const firstPass = useRef();

  console.log(state);

  return (
    <div>
        <form action={formAction} className={styles.regForm}>

            <TextInput type="text" name="userFullName" placeholder="אנא הכניסו שם מלא" required={true} label="שם מלא:" valueMissingMessage="שדה זה נדרש.." pattern="^[a-zA-Zא-ת\s]{2,}$" patternMismatchMessage="שם מלא יכול להכיל רק אותיות בעברית או אנגלית. לא תווים או מספרים.."/>
            <TextInput type="tel" name="userTel" placeholder="אנא הכניסו טלפון" label="טלפון נייד:" required={true} valueMissingMessage="שדה זה נדרש.." pattern="^05[0-9]-?[0-9]{7}$" patternMismatchMessage="יש להכניס בפורמט: 05X-XXXXXXX" />
            <TextInput type="email" name="userEmail" placeholder="אנא הכניסו מייל תקין" label="מייל" required={true} valueMissingMessage="שדה זה נדרש.." typeMismatchMessage="מייל לא תקין" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" patternMismatchMessage="שדה מייל לא תקין" />
            <TextInput type="text" name="userName" placeholder="אנא הכניסו שם משתמש באנגלית" label="שם משתמש באנגלית" required={true} valueMissingMessage="שדה זה נדרש.." pattern="^(?=.*[A-Za-z])[A-Za-z0-9]+$" patternMismatchMessage="אפשר אותיות באנגלית, ומספרים"/>
            <TextInput type="password" name="userPassword" placeholder="אנא הכניסו סיסמא" label="סיסמא:" required={true} valueMissingMessage="שדה זה נדרש.." ref={firstPass} />
            <TextInput type="password" name="userPasswordRepeat" placeholder="אנא הכניסו סיסמא שוב" label="חזרו על סיסמא" 
            required={true} valueMissingMessage="שדה זה נדרש.." customValidators={[
              [repeatCheck(firstPass), "הסיסמאות צריכות להיות תואמות"]
            ]} />
         

            <button type="submit" className={styles.submit}>הרשמה</button>
            
        </form>

        {
          // חוזר מצד השרת אובייקט -- status 
          //  יש לו 2 אפשרויות - או שגיאה שמשהו שכבר קיים 
          // או הצלחה 
          // זה החלק של השגיאה
          state && state.status === "error"? (
            
            <div className={styles.errMsg}>
                {state.message}
            </div>
          ): null
        }

      { 
          // זה החלק שהטופס נשלח בהצלחה והכל תקין 
          state && state.status === "success"? (
            
            <div className={styles.successMsg}>
                נרשמתם בהצלחה! תודה רבה..
            </div>
          ): null
        }
    </div>
  )
}

export default RegisterForm