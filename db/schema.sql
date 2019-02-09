CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers (

 id int NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 devoured boolean DEFAULT false,
 PRIMARY KEY(id)
);