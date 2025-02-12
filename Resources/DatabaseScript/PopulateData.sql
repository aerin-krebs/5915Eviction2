-- if getting error 2068 running in MySQL workbench, go to Database > Manage Connection > Select Current Connection > Advanced > Add this line to other: "OPT_LOCAL_INFILE=1" 
-- then Reset the connection and it should work

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/Users.csv'
INTO TABLE Users
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(user_id, fname, lname, user_type, email, address, hashed_password);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/Resources.csv'
INTO TABLE Resources
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(resource_id, resource_category, title, summary, url, date_updated, creator);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/Decision_Node.csv'
INTO TABLE Decision_Node
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(node_id, is_leaf, display_type, question, node_language);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/Question_Answer.csv'
INTO TABLE Question_Answer
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(parent_node, child_node, answer);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/FAQ.csv'
INTO TABLE FAQ
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(faq_id, question, answer);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/Node_Resource.csv'
INTO TABLE Node_Resource
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(node_id, resource_id);

LOAD DATA LOCAL INFILE 'E:/CSE/CSE5915/FAQ_Resource.csv'
INTO TABLE FAQ_Resource
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(faq_id, resource_id);

