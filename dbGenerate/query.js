// import { response } from "express";

import oracledb from "oracledb";
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// async function runQuery(query) {
//   connection = await oracledb.getConnection({
//     user: "project",
//     password: "12345",
//     connectString: "localhost/orclpdb",
//   });
//   const response = await connection.execute(query);
//   await connection.close();
//   return response;
// }
// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await runQuery(`SELECT ISBN, TITLE FROM BOOK`);
//   const data = await response.json();
//   return {
//     props: {
//       books: data,
//     },
//   };
// }
