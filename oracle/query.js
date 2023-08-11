import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function runQuery(query) {
  const connection = await oracledb.getConnection({
    user: "project",
    password: "12345",
    connectString: "localhost/orclpdb",
  });
  const response = await connection.execute(query);
  await connection.close();
  return response;
}
