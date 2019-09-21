const db = require("../db/database.js");

const reports = {

    // getreports: function(res, apiKey) {
    //     db.all("SELECT " + reports.dataFields +
    //         " FROM reports i" +
    //         " INNER JOIN orders o ON o.ROWID = i.orderId AND o.apiKey = i.apiKey" +
    //         " WHERE i.apiKey = ?",
    //     apiKey, (err, rows) => {
    //         if (err) {
    //             return res.status(500).json({
    //                 errors: {
    //                     status: 500,
    //                     source: "/reports",
    //                     title: "Database error",
    //                     detail: err.message
    //                 }
    //             });
    //         }

    //         res.json( { data: rows } );
    //     });
    // },

    getReport: function(res, reportId, status=200) {
        if (Number.isInteger(parseInt(reportId))) {
            db.get("SELECT text from reports WHERE id = ?",
            reportId,
            function(err, row) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/reports/" + reportId,
                            title: "Database error",
                            detail: err.message
                        }
                    });
                }

                res.status(status).json( { row } );
            });
        } else {
            res.status(400).json({
                errors: {
                    status: 400,
                    detail: "Required attribute reportId " +
                        " is not an integer."
                }
            });
        }
    },

    addReport: function(res, body) {
        db.run("INSERT INTO reports (id, author, text)" +
            " VALUES (?, ?, ?)",
        body.id,
        body.author,
        body.text,
        function (err) {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "POST /reports",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }

            reports.getReport(res, this.lastID, 201);
        });
    }
};

module.exports = reports;