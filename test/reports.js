/* global it describe before */

process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app.js');

chai.should();

const db = require("../db/database.js");

chai.use(chaiHttp);

let token = "";


describe('reports', () => {
    before(() => {
        return new Promise((resolve) => {
            db.run("DELETE FROM reports", (err) => {
                if (err) {
                    console.error("Could not empty test DB table reports", err.message);
                }

                db.run("INSERT INTO reports (id, text) VALUES (1, 'text)", (err) => {
                    if (err) {
                        console.error("Could not insert into test DB table reports", err.message);
                    }

                    db.run("DELETE FROM users", (err) => {
                        if (err) {
                            console.error("Could not empty test DB table users", err.message);
                        }

                        resolve();
                    });
                });
            });
        });
    });
});

describe("Auth - To get a new token", () => {
    // In case user doesn't exist already in the db.
    let user = {
        firstname: "test",
        lastname: "test",
        birthdate: "19890924",
        email: "test@example.com",
        password: "123test"
    };

    chai.request(server)
        .post("/auth/register")
        .send(user);

    // Login to get the token
    it('should get 201', (done) => {
        let user = {
            email: "test@example.com",
            password: "123test"
        };

        chai.request(server)
            .post("/auth/login")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an("object");
                res.body.should.have.property("type");
                res.body.should.have.property("user");
                res.body.type.should.equal("success");
                res.body.should.have.property("type");
                res.body.should.have.property("token");
                token = res.body.token;

                done();
            });
    });
});


describe('GET /reports/1', () => {
    it('should get 401 as we do not provide valid token', (done) => {
        chai.request(server)
            .get('/reports/1')
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.an("object");
                res.body.errors.status.should.be.equal(401);
                done();
            });
    });

    it('should get 200 as we do provide token', (done) => {
        chai.request(server)
            .get('/reports/1')
            .set("x-access-token", token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.length.should.equal(0);
                done();
            });
    });
});

describe('POST /reports', () => {
    it('should get 401 as we do not provide valid token', (done) => {
        const data = {
            id: 5,
            text: "bla bla bla bla"
        };

        chai.request(server)
            .post("/reports")
            .send(data)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.an("object");
                res.body.errors.status.should.be.equal(401);

                done();
            });
    });

    it('should get 500 as we do not provide an id', (done) => {
        const data = {
            // id: '2',
            text: "bla bla bla bla"
        };

        chai.request(server)
            .post("/reports")
            .set("x-access-token", token)
            .send(data)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.errors.status.should.be.equal(500);

                done();
            });
    });

    it('should get 201 as we do provide valid token', (done) => {
        const data = {
            id: '2',
            text: "bla bla bla bla"
        };

        chai.request(server)
            .post("/reports")
            .set("x-access-token", token)
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);

                done();
            });
    });
});

describe('PUT/Update /reports', () => {
    // it('should get 500 as we do not provide an id', (done) => {
    //     const data = {
    //         // id: 5,
    //         // text: "testing"
    //     };

    //     chai.request(server)
    //         .put("/reports")
    //         .set("x-access-token", token)
    //         .send(data)
    //         .end((err, res) => {
    //             res.should.have.status(500);
    //             res.body.errors.status.should.be.equal(500);

    //             done();
    //         });
    // });

    it('should get 204 as we do provide valid token', (done) => {
        const data = {
            id: 1,
            text: "testing"
        };

        chai.request(server)
            .put("/reports")
            .set("x-access-token", token)
            .send(data)
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
    });
});
