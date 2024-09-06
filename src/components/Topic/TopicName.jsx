import Link from 'next/link'
import styles from './topic.module.css'

const TopicName = ({name, url}) => {
  return (
    <Link href={url} className={styles.topicName}>{name}</Link>
  )
}

export default TopicName