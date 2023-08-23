const oracledb = require("oracledb");
const axios = require("axios");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function runApp() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "project",
      password: "12345",
      connectString: "localhost/orclpdb",
    });
    console.log("Succesfully connected to Oracle Database");

    const result = await connection.execute(
      `SELECT DISTINCT GENRE FROM BOOK WHERE GENRE IS NOT NULL`
      //  WHERE delivaryManID = :id`,
      // [1001] // bind value for :id
    );

    // console.log(result);
    // console.log(result.rows);
    let arr=[];
    for (let i = 0; i < result.rows.length; i++) {
      arr.push(result.rows[i].GENRE);
    }
    console.log(arr);
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
}

runApp();
