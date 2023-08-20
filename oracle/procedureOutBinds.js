import oracledb from "oracledb";
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function runProcedureWithOutBinds(query, binds) {
  const connection = await oracledb.getConnection({
    user: "project",
    password: "12345",
    connectString: "localhost/orclpdb",
  });
  const response = await connection.execute(query, binds);
  await connection.commit();
  await connection.close();
  console.log(response.outBinds);
  return response.outBinds;
}
