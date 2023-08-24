import styles from "../styles/author.module.css";
export default function Author({ author }) {
  return (
    <div key={author.name} className={styles.author}>
      <p className={styles.authorName}>{author.NAME} </p>
      <p className={styles.authorInfo}>
        {author.BORNON ? <b>Born: </b> : <></>}
        {author.BORNON || " "}
        {author.DIEDON ? <b>  Died: </b> : <></>}
        {author.DIEDON || " "}
        {author.TYPE ? <b>  Type: </b> : <></>}
        {author.TYPE || " "}
        {author.NATIONALITY ? <b>  Nationality: </b> : <></>}
        {author.NATIONALITY || " "}
      </p>
    </div>
  );
}
