const db = require("../db/database.js");

const reports = {
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

                    res.status(status).json( row );
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
        db.run("INSERT INTO reports (id, text)" +
            " VALUES (?, ?)",
        body.id,
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

            return res.status(201).send();
        });
    },

    updateReport: function(res, body) {
        db.run("UPDATE reports SET text = ? WHERE id = ?",
            body.text,
            body.id,
            function (err) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "PUT /reports UPDATE",
                            title: "Database error",
                            detail: err.message,
                        }
                    });
                }

                return res.status(204).send();
            });
    }
};

module.exports = reports;
