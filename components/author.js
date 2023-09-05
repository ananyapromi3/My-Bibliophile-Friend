import styles from "../styles/author.module.css";
export default function Author({ author }) {
  return (
    <div
      key={author.name}
      className={styles.author}
      style={{ fontFamily: "Georgia, sans-serif" }}
    >
      <p
        className={styles.authorName}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        <b>{author.NAME}</b>
      </p>
      <p
        className={styles.authorInfo}
        style={{ fontFamily: "Georgia, sans-serif" }}
      >
        {author.BORNON ? <b>Born: </b> : <></>}
        {author.BORNON || " "}
        {author.DIEDON ? <b> Died: </b> : <></>}
        {author.DIEDON || " "}
        {author.TYPE ? <b> Type: </b> : <></>}
        {author.TYPE || " "}
        {author.NATIONALITY ? <b> Nationality: </b> : <></>}
        {author.NATIONALITY || " "}
      </p>
    </div>
  );
}
