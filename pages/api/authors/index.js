import { useState } from "react";
import runQuery from "../../../oracle/query";
export default async function handler(req, res) {
  let x = req.query.term;
  x = x.replace("'", "''");
  const response = await runQuery(
    `SELECT * FROM AUTHOR A
    WHERE A.NAME IN (SELECT W.NAME FROM WRITTENBY W WHERE W.ISBN='${x}')`
  );
  // console.log(response.rows);
  // var books = [];
  // let newBook;
  // books.push("hi");
  // let i = 0;
  //   response.rows.forEach(async (book) => {
  // console.log(book.ISBN);
  // let r = await runQuery(
  //   `SELECT * FROM AUTHOR A
  // WHERE A.NAME IN (SELECT W.NAME FROM WRITTENBY W WHERE W.ISBN='${book.ISBN}')`
  // );
  // console.log(
  //   `SELECT * FROM AUTHOR A WHERE A.NAME IN (SELECT W.NAME FROM WRITTENBY W WHERE W.ISBN='${book.ISBN}')`
  // );
  // response.rows[i]["AUTHORS"] = r.rows;
  // console.log(response.rows[i].AUTHORS);
  // book["AUTHOR"] = r.rows;
  // newBook = book;
  // books[0] = book;
  // console.log(book);
  // var newBook = {};
  // (newBook["ISBN"] = book.ISBN),
  //   (newBook["TITLE"] = book.TITLE),
  //   (newBook["PAGECOUNT"] = book.PAGECOUNT),
  //   (newBook["LANGUAGE"] = book.LANGUAGE),
  //   (newBook["PUBLISHYEAR"] = book.PUBLISHYEAR),
  //   (newBook["PRICE"] = book.PRICE),
  //   (newBook["COVERPHOTO"] = book.COVERPHOTO),
  //   (newBook["PUBLISHERNAME"] = book.PUBLISHERNAME),
  //   (newBook["SUMMARY"] = book.SUMMARY),
  //   (newBook["GENRE"] = book.GENRE),
  //   (newBook["AUTHORS"] = r.rows),
  //   console.log(newBook);
  // i = i + 1;
  // books.push(newBook);
  // setBooks(books.concat(book));
  //   });
  // books[4] = newBook;
  // console.log(books);
  // console.log(response.rows);
  res.json(response.rows);
  // res.json(null);
  // req.json(books);
}
