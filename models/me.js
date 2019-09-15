const db = require("../db/database.js");

const me = {
    getMe: function(res, status=200) {
        db.all("SELECT * FROM me;", 
        (err, rows) => {
            if (err) {
                return me.errorResponse(res, "/me", err);
            }
            res.status(status).json( rows );
        });
    },

    errorResponse: function(res, path, err) {
        return res.status(500).json({
            errors: {
                status: 500,
                source: path,
                title: "Database error",
                detail: err.message
            }
        });
    }
}

module.exports = me;