export async function runQuery(query, commit, bindVariables) {
  try {
    oracledb.getPool();
  } catch (e) {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
  }
  const connection = await oracledb.getConnection();

  const result = await connection.execute(
    query,
    bindVariables ? bindVariables : {}
  );

  if (commit) await connection.commit();

  await connection.close();

  return result.rows;
}
