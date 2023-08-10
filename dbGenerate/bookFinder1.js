const oracledb = require("oracledb");
const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://books39.p.rapidapi.com/CZFA4F/books',
//   headers: {
//     'X-RapidAPI-Key': 'b09a09b155mshf07c54bdfdde92fp176e49jsn8d6c8d81867a',
//     'X-RapidAPI-Host': 'books39.p.rapidapi.com'
//   }
// };

const options = {
  method: "GET",
  url: "https://book-finder1.p.rapidapi.com/api/search",
  params: {
    book_type: 'Fiction',
    results_per_page: "100",
  },
  headers: {
    "X-RapidAPI-Key": "b09a09b155mshf07c54bdfdde92fp176e49jsn8d6c8d81867a",
    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
  },
};

// async function run() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// run();

async function runApp() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "project",
      password: "12345",
      connectString: "localhost/orclpdb",
    });
    console.log("Succesfully connected to Oracle Database");

    const response = await axios.request(options);
    console.log(response.data);
    let authors = new Set([]);
    for (const book of response.data.results) {
      let title = book.title;
      title = title.replace("'", "''");
      const ISBN = book.canonical_isbn;
      const pageCount = book.page_count;
      const language = book.language;
      let genre = book.book_type;
      if (genre) {
        genre = genre.replace("'", "''");
      }
      const publishYear = book.copyright;
      const coverPhoto = book.published_works[0].cover_art_url;
      let sum = book.summary;
      if (sum) {
        sum = sum.replace("'", "''");
      }

      // console.log(book.book_type);

      // console.log(`INSERT INTO BOOK VALUES('${ISBN}', '${title}', ${pageCount}, '${language}', ${publishYear}, NULL, '${coverPhoto}', '${sum}', '${genre}');`);
      // await connection.execute(
      //   `INSERT INTO BOOK VALUES('${ISBN}', '${title}', ${pageCount}, '${language}', '${genre}', ${publishYear}, NULL, '${coverPhoto}', NULL)`
      // );
      // await connection.execute(
      //   `UPDATE BOOK SET SUMMARY='${sum}' WHERE ISBN='${ISBN}';`
      // );
      // console.log(`UPDATE BOOK SET SUMMARY='${sum}' WHERE ISBN='${ISBN}';`);
      // console.log(title + ": ");
      // for (let author of book.authors) {
      //   author = author.replace("'", "''");
      // console.log(author + ", ");
      // if (author) {
      //   await connection.execute(
      //     `INSERT INTO WRITTENBY VALUES('${ISBN}', '${author}')`
      //   );
      // }
      // if (author) {
      //   author = author.replace("'", "''");
      //   authors.add(author);
      // }
      // }
    }
    // for (const a of authors) {
    // console.log(`INSERT INTO AUTHOR VALUES('${a}', NULL, NULL, NULL, NULL)`);
    // await connection.execute(
    //   `INSERT INTO AUTHOR VALUES('${a}', NULL, NULL, NULL, NULL)`
    // );
    // }
    await connection.commit();
    // const p = await connection.execute(`SELECT * FROM BOOK`);
    // console.log(p.rows);
  } catch (err) {
    console.log("Here " + err);
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log("Connection Closed");
      } catch (err) {
        console.log(err);
      }
    }
  }
}

runApp();
