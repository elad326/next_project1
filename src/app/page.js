import Image from "next/image";
import styles from "./page.module.css";
import homeList from "./home-list";
import Link from "next/link";
import Topic from "@/components/Topic/Topic";
import topicList from "@/components/Topic/topicList";


export default function Home() {
  return (
    <main>
      <section className={styles.banner}>
        <h1>אתר לימוד תורה בשמחה - לימוד תורה לאנשים עובדים</h1>
        <div className={styles.wrapButtons}>
          <a href="#aboutSite"><span className={styles.growAnim}>קצת על האתר </span></a>
          <a href="#siteContent"><span className={styles.growAnim}>לגשת ישר לתכנים </span></a>
        </div>
      </section>
      <section className={styles.contentAbout} id="aboutSite">
          <h2>אתר תורה בשמחה – הינו אתר המנגיש לימוד תורה לאנשים עובדים .</h2>

          <h3>באתר תוכלו כבר למצוא:</h3>

          <ul>{
              homeList.map((item) =>
                <li key={item} className={styles.listItem}>{item}</li>
              )
            }
          </ul>

          <p>
            מוזמנים להיכנס ללימוד תורה הרצוי וללמוד דברים חדשים. <br/>
            פה מתחת תוכלו לבחור . 
          </p>

          <p className={styles.lastPar}>
              לנרשמים לאתר, ניתן גם לשמור חזרות על הלימוד – 

              <Link href="/register">להרשמה</Link> 
          </p>

          <p className={styles.lastPar}>
             אתר לימוד תורה בשמחה – מאפשר לימוד תורה לאנשים עובדים . 
          </p>

          

          <div className={styles.newsTicker}>
              <h4>חדש באתר :</h4>
              <p>ספרים יהושע ושופטים מתעדכנים מידי שבוע || ספר בראשית וספר דברים מתעדכנים מידי שבוע ||
                סיכום משניות מתעדכן [ סוכה כעת ] || סיכום ספרי מרן הרב קוק — אורות התורה |
                אורות התשובה | מוסר אביך – אט אט מעדכנים . || יש באתר חידונים על כל הפרשות . 
              </p>

          </div>
      </section>

      <section className={styles.topics} id="siteContent">
        <h2>בחרו נושאים ללימוד</h2>

        <div className={styles.topicsBox}>
          {
            topicList.map((item) => 
              <Topic {...item}/>
            )
          }

        </div>
      </section>
    </main>
  );
}
