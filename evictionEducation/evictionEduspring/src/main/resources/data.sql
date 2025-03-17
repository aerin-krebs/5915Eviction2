-- -- Test of the data.sql file with H2 compliance -- -- 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (1, 'Nick', 'Varga', 'admin', 'Varga.95@buckeyemail.osu.edu', '', 'dfc36f0565b8a07ab57adf416c43d606cd5ed184f27f87d9e0d71242'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (2, 'Aerin', 'Krebs', 'admin', 'Krebs.178@osu.edu', '', 'a2f26991d9418bf2b4277171ed4e8244bb6cb71a64e6ec084dd0cc99'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (3, 'Mia', 'Cline', 'admin', 'Cline.675@osu.edu', '', '8623564898247e4abb80a8ea299c040177e55165e62cf9576efecbb4'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (4, 'Phil', 'Onufriychuk', 'admin', 'Onufriychuk.1@osu.edu', '', 'e1f6faf3fe74c80e250d7a2ef530b4b6807b073ee4bf18cf63b26811'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (5, 'Natalie', 'Chmura', 'admin', 'Chmura.18@osu.edu', '', '6f9bcc307edb06fee66bf7101fb50dc7749ce04670f3d0c8c9d10320'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (6, 'Christal', 'Khy', 'admin', 'Khy.3@buckeyemail.osu.edu', '', '4a2e55fda50055a3557277030c36fcd059a8ead74c63f841c6db8985'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (7, 'Izzy', 'McCale', 'admin', 'McCale27@gmail.com', '', '148f3731091e1d0cd012c3ad8d0b2dfd0bc3fa4fa76026ba815fd88e'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (8, 'Test', 'User', 'admin', 'test.user@example.com', '1234 N High St, Columbus, Ohio', '27ac607194aae07ce7e98ef01f74293d60159740aadaac98334725de'); 

INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (1, 'Health', 'Medicaid', 'Provides health insurance for low-income adults and children, expanded under the ACA in Ohio.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (2, 'Health', 'Medicare', 'Federal health insurance program primarily for people aged 65 and older or with certain disabilities.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (3, 'Health', 'CHIP', 'Offers health insurance to uninsured children in families with income up to 206% of the FPL.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (4, 'Food', 'SNAP', 'Provides monthly funds via EBT cards to help families purchase groceries.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (5, 'MISC.', 'TANF', 'Offers financial assistance and support services to low-income families with children.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (6, 'Housing', 'PIPP', 'Reduces utility bills to 5% of household income for eligible low-income families.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (7, 'Health', 'Health Impact Ohio', 'Provides public health services and advocates for health equity across Ohio communities.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (8, 'Childcare', 'Action for Children', 'Offers childcare referrals, parenting classes, and family resources in central Ohio.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (9, 'Childcare', 'Fugees', 'Supports refugee children with educational and extracurricular programs.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (10, 'Food', 'Ohio Association of Food Banks', 'Coordinates statewide food assistance programs and hunger relief initiatives.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (11, 'Housing', 'The H.E.L.P. Center', 'Provides housing assistance and support services for families in need.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (12, 'Food', 'Food Not Bombs', 'Distributes free, no-questions-asked meals every Saturday at various Columbus locations.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (13, 'MISC.', 'Mid-Ohio Workers', 'Advocates for low-income workers through legal clinics, healthcare, and food drives.', 'google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (14, 'Legal Counsel', 'Legal Aid Society of Central Ohio', 'Offers legal aid, including for evictions, to those at or below 125% of the FPL.', 'google.com', '2025-02-12', 7);

INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (1, 0, 'Text', 'Do you have a 3 or 30 day notice?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (2, 0, 'Text', 'Are you in subsidized housing?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (3, 0, 'Text', 'Are you in subsidized housing?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (4, 0, 'Text', 'Did you successfully mediate?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (5, 1, 'Text', 'Legal Aid Society.', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (6, 1, 'Text', 'More information needed.', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (7, 1, 'Text', 'No Mediation', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (8, 1, 'Text', 'Yes Mediation', 'English');


INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (1, 2, '30 Day');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (1, 3, '3 Day');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (2, 5, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (2, 6, 'No');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (3, 5, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (3, 4, 'No');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (4, 8, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (4, 7, 'No');


INSERT INTO FAQ(faq_id, question, answer) VALUES (1, 'What is the eviction process in Columbus, Ohio?', 'In Columbus, the eviction process begins with the landlord serving the tenant a Notice to Leave the Premises, providing at least a 3-day notice period. If the tenant does not vacate within this period, the landlord can file an eviction complaint in the Franklin County Municipal Court.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (2, 'What are the reasons a landlord can evict a tenant?', 'Common reasons for eviction include non-payment of rent, violation of lease terms, or engaging in illegal activities on the property.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (3, 'What are my rights as a tenant facing eviction?', 'Tenants have rights, including the right to proper notice and the opportunity to contest the eviction in court. Landlords cannot forcibly remove tenants without a court order. The Columbus Urban League provides information and support; they can be reached at (614) 257-6300.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (4, 'Can a landlord evict me without going to court?', 'No, landlords must follow the legal eviction process, which involves serving proper notice and obtaining a court order before evicting a tenant. Self-help evictions, such as changing locks or removing tenant belongings without a court order, are illegal in Ohio.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (5, 'How can I contest an eviction notice?', 'If you receive an eviction notice, attend the scheduled court hearing to present your case. You may request a one-week continuance if you appear at the hearing. It is beneficial to consult with an attorney or legal aid organization to prepare your defense.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (6, 'What should I do if I receive a Notice to Leave the Premises?', 'Upon receiving this notice, you have the specified time (usually 3 days) to vacate the property or address the issue cited. If you believe the notice is unjust or have concerns, consult with a legal professional promptly to understand your options.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (7, 'Can I withhold rent if my landlord is not making necessary repairs?', 'Ohio law allows tenants to deposit rent with the court if the landlord fails to make necessary repairs after being notified. However, specific procedures must be followed, and it is advisable to seek legal guidance before taking this step.');

INSERT INTO Node_Resource(node_id, resource_id) VALUES (4, 14);
INSERT INTO Node_Resource(node_id, resource_id) VALUES (5, 6);
INSERT INTO Node_Resource(node_id, resource_id) VALUES (6, 5);
INSERT INTO Node_Resource(node_id, resource_id) VALUES (7, 12);


INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (5, 14);
INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (7, 14);