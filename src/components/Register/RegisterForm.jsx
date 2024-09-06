import TextInput from "../TextInput/TextInput"


const RegisterForm = () => {
  return (
    <div>
        <form action="" method="post">

            <TextInput type="text" name="userFullName" placeholder="אנא הכניסו שם מלא"/>
            <TextInput type="tel" name="userTel" placeholder="אנא הכניסו טלפון"/>
            <TextInput type="email" name="userEmail" placeholder="אנא הכניסו מייל תקין"/>
            <TextInput type="text" name="userName" placeholder="אנא הכניסו שם משתמש באנגלית"/>
            <TextInput type="password" name="userPassword" placeholder="אנא הכניסו סיסמא"/>
            <TextInput type="password" name="userPasswordRepeat" placeholder="אנא הכניסו סיסמא שוב"/>

            <button type="submit">הרשמה</button>
            
        </form>
    </div>
  )
}

export default RegisterForm