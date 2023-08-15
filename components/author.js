export default function Author({ author }) {
  return (
    <div key={author.name}>
      <h4>{author.NAME} </h4>
      <h5>
        Born:{author.BORNON}, Died:{author.DIEDON}, Type:{author.TYPE},
        Nationality:{author.NATIONALITY}
      </h5>
    </div>
  );
}
