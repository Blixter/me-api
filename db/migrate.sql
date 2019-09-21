CREATE TABLE IF NOT EXISTS users (
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    birthdate TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS me (
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS reports (
    id INTEGER NOT NULL,
    author VARCHAR(25) NOT NULL,
    text TEXT NOT NULL
);

