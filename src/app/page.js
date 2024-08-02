import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.banner}>
        <h1>אתר לימוד תורה בשמחה - לימוד תורה לאנשים עובדים</h1>
        <div className={styles.wrapButtons}>
          <button>קצת על האתר </button>
          <button>לגשת יש לתכנים</button>
        </div>
      </section>
    </main>
  );
}
