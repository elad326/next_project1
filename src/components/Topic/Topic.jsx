import Image from 'next/image';
import styles from './topic.module.css';
import TopicName from './TopicName';

const Topic = ({icon, title, topicName}) => {
  return (
    <div className={styles.wrapTopic}>
        <Image src={icon} alt="אייקון של הלימוד" width={45} height={60} />
        <h3>{title}</h3>

        <div className={styles.allTopics}>
            {
                topicName.map((item) =>
                    <TopicName key={item.name} name={item.name} url={item.url}/>
                )
            }
        </div>
    </div>
  )
}

export default Topic

