-- CREATE DATABASE burgers_db;
USE burgers_db

DROP TABLE burgers_db.burgers


CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
    -- specify more columns here
);

