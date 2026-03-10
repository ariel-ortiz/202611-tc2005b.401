// File: mysql_select.mjs

// Import module to handle MySQL database operations with promises
import mysql from 'mysql2/promise';

// An async function to perform a SELECT operation on the
// database
async function main() {

    let connection;

    try {
        // Create a connection to the database
        connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: 'web_database'
        });
        console.log('Conected to the database');

        const author = 'Yoda';
        const excerpt = 'Do or do not. There is no try.'

        // The SQL command to execute
        const sqlInsert = 'INSERT INTO quotations (author, excerpt) VALUES (?, ?)';

        // Execute the query
        const result = await connection.execute(sqlInsert, [author, excerpt]);
        console.log('Insertion succeded');
        console.log(`New row ID: ${result[0].insertId}`);

    } catch (err) {
        // If an error occurs, re-throw the error
        throw err;

    } finally {
        // Close the database connection
        if (connection) {
            await connection.end();
        }
    }
}

main();
