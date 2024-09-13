"use client";

import TextInput from "../TextInput/TextInput";
import { useFormStatus } from "react-dom";
import { registerToDB } from '@/lib/actions';


const SubmitForm = () => {
  const { pending, data } = useFormStatus();
  return <>
        {pending? "waiting": null}
        <button type="submit">הרשמה</button>
      </>;
}

const RegisterForm = () => {

  

  return (
    <div>
        <form action={registerToDB} method="post">

            <TextInput type="text" name="userFullName" placeholder="אנא הכניסו שם מלא"/>
            <TextInput type="tel" name="userTel" placeholder="אנא הכניסו טלפון"/>
            <TextInput type="email" name="userEmail" placeholder="אנא הכניסו מייל תקין"/>
            <TextInput type="text" name="userName" placeholder="אנא הכניסו שם משתמש באנגלית"/>
            <TextInput type="password" name="userPassword" placeholder="אנא הכניסו סיסמא"/>
            <TextInput type="password" name="userPasswordRepeat" placeholder="אנא הכניסו סיסמא שוב"/>

            <SubmitForm/>
            
        </form>
    </div>
  )
}

export default RegisterForm