const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "./db/texts.sqlite";

module.exports = (function () {
    let db = new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            console.error(err.message);
            throw err;
        } else {
            console.log('Connected to the SQLite database.')
        }
    })
    return db;
}());