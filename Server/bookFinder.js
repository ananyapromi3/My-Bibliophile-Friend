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
  method: 'GET',
  url: 'https://book-finder1.p.rapidapi.com/api/search',
  params: {
    results_per_page: '100'
  },
  headers: {
    'X-RapidAPI-Key': 'b09a09b155mshf07c54bdfdde92fp176e49jsn8d6c8d81867a',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
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
    // connection = await oracledb.getConnection({
    //   user: "project",
    //   password: "12345",
    //   connectString: "localhost/orclpdb",
    // });
    // console.log("Succesfully connected to Oracle Database");

    const response = await axios.request(options);
    // console.log(response.data);
    let a = 1;
    for (const book of response.data.results)
    {
        console.log(book.title);
        a = a+1;
    }
    console.log(a);
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
