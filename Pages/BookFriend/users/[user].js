export default function User() {}
export async function getStaticProps(context) {
  const { params } = context;
  connection = await oracledb.getConnection({
    user: "project",
    password: "12345",
    connectString: "localhost/orclpdb",
  });

  const response = await connection.execute(
    `SELECT * FROM DELIVARYMAN`
    //  WHERE email = :id`,
    // [1001] // bind value for :id
  );
}
