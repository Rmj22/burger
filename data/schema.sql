CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger_db.burgers
(
    Id INT(20) AUTO_INCREMENT NOT NULL, -- primary key column
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN
    -- specify more columns here
);
