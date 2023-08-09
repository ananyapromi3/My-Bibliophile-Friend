const oracledb = require('oracledb');
const axios = require('axios');

async function runApp() {
    let connection;
    try{
    connection = await oracledb.getConnection ({
        user          : "project",
        password      : "12345",
        connectString : "localhost/orclpdb"
    });
    console.log("Succesfully connected to Oracle Database");

    const result = await connection.execute(
        `SELECT delivaryManID, emailID
         FROM DELIVARYMAN
         WHERE delivaryManID = :id`,
        [1001],  // bind value for :id
    );

    console.log(result);
    console.log(result.rows);
    } catch(err){
        console.log(err);
    } finally {
        if(connection)
        {
            try{
                await connection.close();
            } catch(err)
            {
                console.log(err);
            }
        }
    }
}

runApp();