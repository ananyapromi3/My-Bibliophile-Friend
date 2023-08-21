// import runProcedureWithOutBinds from "../../../../oracle/procedureOutBinds";
// import runQuery from "../../../../oracle/query";
// import oracledb from "oracledb";
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// export default async function handler(req, res) {
//   let notiInfo = req.body;
//   notiInfo = JSON.parse(notiInfo);
//   const userId = notiInfo.userId;
//   const offerId = notiInfo.offerId;
//   const binds = {
//     userId: userId,
//     offerId: offerId,
//     msg: { dir: oracledb.BIND_OUT, type: oracledb.VARCHAR2 },
//   };
//   const response = await runProcedureWithOutBinds(
//     `BEGIN
//         CREATE_NOTIFICATION1 (:userId, :offerId, :msg);
//     END;`,
//     binds
//   );
//   res.status(200).json(response);
// }
