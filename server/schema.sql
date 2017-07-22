drop database chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE Users (
  user_Id int,
  userName text,
  PRIMARY KEY (user_Id)  
);

CREATE TABLE Messages (
  message_Id int,
  roomName text,
  message text,
  sender_Id int,
  PRIMARY KEY (message_Id),
  FOREIGN KEY (sender_Id) REFERENCES Users(user_Id)
);




/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

