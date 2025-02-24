-- -- Test of the data.sql file with H2 compliance -- -- 
INSERT INTO Users (user_id, fname, lname, user_type, email, address, hashed_password) 
SELECT user_id, fname, lname, user_type, email, address, hashed_password
FROM CSVREAD('Abs\Path\To\Resources\DatabaseCSVs\Users.csv, 'user_id, fname, lname, user_type, email, address, hashed_password', 'charset=UTF-8 fieldSeparator=,');