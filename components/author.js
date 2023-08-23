import styles from "../styles/author.module.css";
export default function Author({ author }) {
  return (
    <div key={author.name} className={styles.author}>
      <p className={styles.authorName}>{author.NAME} </p>
      <p className={styles.authorInfo}>
        <b>Born: </b>{author.BORNON}, <b>Died: </b>{author.DIEDON}, <b>Type: </b>{author.TYPE}, <b>Nationality: </b>{author.NATIONALITY}
      </p>
    </div>
  );
}
