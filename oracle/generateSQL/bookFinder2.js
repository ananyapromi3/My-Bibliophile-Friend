const oracledb = require("oracledb");
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://books39.p.rapidapi.com/CZFA4F/books",
  headers: {
    "X-RapidAPI-Key": "b09a09b155mshf07c54bdfdde92fp176e49jsn8d6c8d81867a",
    "X-RapidAPI-Host": "books39.p.rapidapi.com",
  },
};

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
    // console.log(response.data);
    // let publishers = new Set([]);
    for (const book of response.data) {
      let title = book.TITLE;
      title = title.replace("'", "''");
      let publisher = book.PUBLISHER;
      publisher = publisher.replace("'", "''");
      const isbn = book.ISBN;
      let lang = book.LANG;
      if (lang == "eng") {
        lang = lang + "lish";
      }
      const year = book.YEAR;
      let str = book.PHYSICAL_DESCRIPTION;
      let matches = str.match(/(\d+)/);
      let page;
      if (matches) {
        page = matches[0];
      }
      let genre = "unknown";
      console.log(`INSERT INTO BOOK VALUES('${isbn}', '${title}', ${page}, '${lang}', '${genre}', ${year}, NULL, NULL, NULL);`)
      // await connection.execute(
      //   `INSERT INTO BOOK VALUES('${isbn}', '${title}', ${page}, '${lang}', '${genre}', ${year}, NULL, NULL, NULL)`
      // );
      //   let publisherAddress = book.PUBLISHER_CITY;
      //   publisherAddress = publisherAddress.replace("'", "''");
      //   publishers.add([publisher, publisherAddress]);
      //   let title = book.title;
      //   title = title.replace("'", "''");
      //   const ISBN = book.canonical_isbn;
      //   const pageCount = book.page_count;
      //   const language = book.language;
      //   const genre = book.book_type;
      //   const publishYear = book.copyright;
      //   const coverPhoto = book.published_works[0].cover_art_url;
    }
    // for (p of publishers) {
    //   //   console.log(p[0] + " : " + p[1]);
    //   console.log(`INSERT INTO PUBLISHER VALUES('${p[0]}', '${p[1]}', NULL, NULL, NULL)`);
    // //   await connection.execute(
    // //     `INSERT INTO PUBLISHER VALUES('${p[0]}', '${p[1]}', NULL, NULL, NULL)`
    // //   );
    // }

    await connection.commit();
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
