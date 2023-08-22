import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function runQueryWithBinds(query, binds) {
  // const connection = await oracledb.getConnection({
  //   user: "project",
  //   password: "12345",
  //   connectString: "localhost/orclpdb",
  // });
  try {
    oracledb.getPool();
  } catch (e) {
    await oracledb.createPool({
      user: "project",
      password: "12345",
      connectString: "localhost/orclpdb",
    });
  }
  const connection = await oracledb.getConnection();
  const response = await connection.execute(query, binds);
  await connection.commit();
  await connection.close();
  return response;
}
