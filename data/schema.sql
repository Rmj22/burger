-- CREATE DATABASE burgers_db;
USE burgers_db
CREATE TABLE burgers_db.burgers
(
    Id INT(20) AUTO_INCREMENT NOT NULL, -- primary key column
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (Id)
    -- specify more columns here
);
