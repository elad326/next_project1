
import RegisterForm from '@/components/Register/RegisterForm';
import styles from './login.module.css';
import LoginForm from '@/components/Login/LoginForm';

const page = () => {
  return (
    <main>

        <section className={styles.container}>

          

            <h1>התחברות לאתר: </h1>

            <div className={styles.loginForm}>
                <LoginForm/>
            </div>

        </section>

    </main>
  )
}

export default page