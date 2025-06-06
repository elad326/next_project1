

import RegisterForm from '@/components/Register/RegisterForm';
import styles from './register.module.css';

const page = () => {
  return (
    <main>

        <section className={styles.container}>

            <h1>הרשמה לאתר: </h1>

            <div className={styles.registerForm}>
                <RegisterForm/>
            </div>

        </section>

    </main>
  )
}

export default page