-- init.sql

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    identification VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS comics (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    creators TEXT,
    prices INTEGER,
    thumbnail TEXT
);


CREATE TABLE IF NOT EXISTS favorite_comics (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    comic_id INTEGER REFERENCES comics(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, comic_id)
);

