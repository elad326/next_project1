"use client";

import { useActionState, useEffect } from "react";
import TextInputTestWithRef from "../TextInput/TextInputTest";
import TextInput from "../TextInput/TextInputTest";
import styles from "./loginForm.module.css";
import { login, githubAction } from "@/lib/actions";
import { useRouter } from "next/navigation"; // Import useRouter
import { signIn } from "@/auth";

const LoginForm = () => {
  /*

*****************

כעת לוגין :
עשינו לוגין בהצלחה רבה כולל בדיקת מייל, סיסמא, ושתילת טוקן 

עוד צריך :
1. לעשות בסוף התחברות עם חשבון גוגל 

התחלנו לראות איך עושים לוגין עם גוגל 
https://www.youtube.com/watch?v=ot9yuKg15iA

למדנו סרטון ועצרנו בדקה 11 

להמשיך בפעם הבאה את הסרטון 

נעזרנו גם בצאט GPT עבור לוגין עם נקסט גוגל ומונגו DB 

לעבור על ה GPT בפעם הבאה 


אולי גם עם פייסבוק 
2. להגיד אם יוזר מחובר - שלום ____ בראש העמוד . 


****************

*/

  const router = useRouter(); // Initialize router
  const [state, formAction] = useActionState(login, null);

  useEffect(() => {
    if (state?.status === "success") {
      router.push("/");
    }
  }, [state]);

  return (
    <div>
      <form>
        <TextInput
          type="email"
          placeholder="אנא הכניסו מייל תקין"
          label="מייל"
          required={true}
          name="loginEmail"
          valueMissingMessage="שדה זה נדרש.."
          typeMismatchMessage="מייל לא תקין"
          pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
          patternMismatchMessage="שדה מייל לא תקין"
        />
        <TextInput
          type="password"
          placeholder="אנא הכניסו סיסמא"
          label="סיסמא:"
          required={true}
          valueMissingMessage="שדה זה נדרש.."
          name="loginPassword"
        />
        <button type="submit" className={styles.submit} formAction={formAction}>
          התחברות לאתר
        </button>
      </form>

      <form action={githubAction}>
        <button type="submit" className={styles.github}>
          Signin with GitHub
        </button>
      </form>

      {
        // חוזר מצד השרת אובייקט -- status
        //  יש לו 2 אפשרויות - או שגיאה שמשהו שכבר קיים
        // או הצלחה
        // זה החלק של השגיאה
        state && state.status === "error" ? (
          <div className={styles.errMsg}>{state.message}</div>
        ) : null
      }

      {
        // זה החלק שהטופס נשלח בהצלחה והכל תקין
        state && state.status === "success" ? (
          <div className={styles.successMsg}>התחברתם בהצלחה ..</div>
        ) : null
      }
    </div>
  );
};

export default LoginForm;
