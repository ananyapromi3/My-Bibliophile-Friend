import { useState } from "react";
import { useRouter } from "next/router";
import runQueryWithBinds from "../../../../oracle/queryBinds";

export default async function handler(req, res) {
  const id = req.query.id;
  // console.log(id);
  const binds = {
    id: id,
  };
  const response = await runQueryWithBinds(
    `UPDATE DELIVARYOFFER
     SET STATUS = 'Delivered'
     WHERE EXCHANGEID = :id`,
    binds
  );
  res.json();
}
