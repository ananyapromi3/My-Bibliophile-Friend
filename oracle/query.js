import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// export default async function runQuery(query) {
//   const connection = await oracledb.getConnection({
//     user: "project",
//     password: "12345",
//     connectString: "localhost/orclpdb",
//   });
//   const response = await connection.execute(query);
//   await connection.commit();
//   await connection.close();
//   return response;
// }

export default async function runQuery(query) {
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
  const result = await connection.execute(query);
  await connection.commit();
  await connection.close();
  return result;
}
