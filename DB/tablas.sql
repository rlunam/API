DROP DATABASE IF EXISTS crudelements;
CREATE DATABASE crudelements;

CREATE TABLE elementos{
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    descripcion VARCHAR(255)
}
