
CREATE TABLE Users (
	user_id int NOT NULL,
    fname varchar(25),
	lname varchar(25),
    user_type varchar(10) NOT NULL,
    email varchar(50),
    address varchar(155),
    hashed_password varchar(100), -- Depending on hash method we can make it an exact length
    PRIMARY KEY (user_id)
);

CREATE TABLE Resources (
	resource_id int NOT NULL,
    resource_category varchar(100) NOT NULL,
	title varchar(100) NOT NULL,
    summary text,
    url varchar(155) NOT NULL,
    date_updated date NOT NULL,
    creator int,
    PRIMARY KEY (resource_id),
    FOREIGN KEY (creator) REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE Decision_Node (
	node_id int NOT NULL,
    is_leaf bool NOT NULL,
	display_type varchar(25) NOT NULL,
    question text,
    node_language varchar(25) NOT NULL,
    PRIMARY KEY (node_id)
);

CREATE TABLE Question_Answer (
	parent_node int NOT NULL,
    child_node int,
	answer varchar(100) NOT NULL,
    PRIMARY KEY (parent_node, answer),
	FOREIGN KEY (parent_node) REFERENCES Decision_Node(node_id) ON DELETE CASCADE,
    FOREIGN KEY (child_node) REFERENCES Decision_Node(node_id) ON DELETE SET NULL
);

CREATE TABLE FAQ (
	faq_id int NOT NULL,
    question text NOT NULL,
	answer text NOT NULL,
    PRIMARY KEY (faq_id)
);

CREATE TABLE Node_Resource (
	node_id int NOT NULL,
    resource_id int NOT NULL,
    PRIMARY KEY (node_id, resource_id),
    FOREIGN KEY (node_id) REFERENCES Decision_Node(node_id) ON DELETE CASCADE,
	FOREIGN KEY (resource_id) REFERENCES Resources(resource_id) ON DELETE CASCADE
);

CREATE TABLE FAQ_Resource (
	faq_id int NOT NULL,
    resource_id int NOT NULL,
    PRIMARY KEY (faq_id, resource_id),
    FOREIGN KEY (faq_id) REFERENCES FAQ(faq_id) ON DELETE CASCADE,
	FOREIGN KEY (resource_id) REFERENCES Resources(resource_id) ON DELETE CASCADE
);
    