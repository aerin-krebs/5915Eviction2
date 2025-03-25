-- -- Test of the data.sql file with H2 compliance -- -- 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (1, 'Nick', 'Varga', 'admin', 'Varga.95@buckeyemail.osu.edu', '', 'dfc36f0565b8a07ab57adf416c43d606cd5ed184f27f87d9e0d71242'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (2, 'Aerin', 'Krebs', 'admin', 'Krebs.178@osu.edu', '', 'a2f26991d9418bf2b4277171ed4e8244bb6cb71a64e6ec084dd0cc99'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (3, 'Mia', 'Cline', 'admin', 'Cline.675@osu.edu', '', '8623564898247e4abb80a8ea299c040177e55165e62cf9576efecbb4'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (4, 'Phil', 'Onufriychuk', 'admin', 'Onufriychuk.1@osu.edu', '', 'e1f6faf3fe74c80e250d7a2ef530b4b6807b073ee4bf18cf63b26811'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (5, 'Natalie', 'Chmura', 'admin', 'Chmura.18@osu.edu', '', '6f9bcc307edb06fee66bf7101fb50dc7749ce04670f3d0c8c9d10320'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (6, 'Christal', 'Khy', 'admin', 'Khy.3@buckeyemail.osu.edu', '', '4a2e55fda50055a3557277030c36fcd059a8ead74c63f841c6db8985'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (7, 'Izzy', 'McCale', 'admin', 'McCale27@gmail.com', '', '148f3731091e1d0cd012c3ad8d0b2dfd0bc3fa4fa76026ba815fd88e'); 
INSERT INTO Users(user_id, fname, lname, user_type, email, address, hashed_password) VALUES (8, 'Test', 'User', 'user', 'test.user@example.com', '1234 N High St, Columbus, Ohio', '27ac607194aae07ce7e98ef01f74293d60159740aadaac98334725de'); 


INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (1, 'Legal Counsel', 'Legal Aid Society of Central Ohio', 'Offers legal aid, including for evictions, to those at or below 125% of the FPL.', 'https://www.lasco.org/', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (2, 'Chat', 'Chat and Resources', 'Link to messenger chat and general resources', 'https://www.google.com', '2025-02-12', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (3, 'Rental Assistance', 'IMPACT Community Action', 'This agency will help if you end up in eviction. Aid is offered once a year. In some cases loans will be issued for rental payments', '(614) 252-2799', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (4, 'Rental Assistance', 'PRC (Prevention, Retention, and Contingency)', 'This program is for tenants who have children and live in Franklin County. They can help with both rent and energy bills', 'https://jfs.franklincountyohio.gov/emergency-assistance-(prc)', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (5, 'Rental Assistance', 'St. Vincent de Paul Society', 'They have linkage to emergency rental assistance programs. Also have other programs for food, emergency housing, clothing, and funeral funds.', '(614) 221-3554', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (6, 'Rental Assistance', 'Central Community House', 'Specifically talk to Grecca McClurge (614) 795-4461', 'https://www.cchouse.org/', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (7, 'Rental Assistance', 'St. Stephen''s Community House', 'Both loans and grants are available', '(614) 294-6347', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (8, 'Rental Assistance', 'Resident Relief Foundation', 'For multifamily properties only. You must have lived in the property at least 3 months.', 'https://residentrelieffoundation.org/our-programs/', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (9, 'Youth Crisis Support', 'Huck House', 'Crisis shelter, offering a temporary safe place to stay (Ages 12-17). They can provide hot meals, a warm bed, and access to necessities like clothes and hygiene items', '(614) 294-8097', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (10, 'Youth Crisis Support', 'Star House', '24/7 Drop-in center & safe place to go (Ages 14 - 24). Access to food, clothing, hygiene, laundry, showers, case management, housing help, transportation, health care, legal aid, benefits, ID cards, and more.', '(614) 826-5868', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (11, 'Adult & Family Crisis Support', 'Youth Shelter Hotline', '', '(614) 294-5553', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (12, 'Adult & Family Crisis Support', 'CHOICES', '', '(614) 224-4663', '2025-03-17', 7);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (13, 'Fillable Form', 'Eviction Removal Form', '', 'https://municipalcourt.franklincountyohio.gov/Forms/Eviction/Application-to-Remove-Eviction-from-Online-Access.aspx', '2025-03-25', 1);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (14, 'Fillable Form', 'Notice to leave premises', '', 'https://municipalcourt.franklincountyohio.gov/Forms/Eviction/Notice-to-Leave-Premises.aspx', '2025-03-25', 1);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (15, 'Fillable Form', 'Security Deposit Return Packet', '', 'https://irp.cdn-website.com/201ef22d/files/uploaded/Security_Deposit_Packet_-_LASCO_-_12.23.pdf', '2025-03-25', 1);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (16, 'Fillable Form', 'Objection to the Magistrate’s Decision', '', 'https://municipalcourt.franklincountyohio.gov/Forms/Small-Claims/Objection.aspx', '2025-03-25', 1);
INSERT INTO Resources(resource_id, resource_category, title, summary, url, date_updated, creator) VALUES (17, 'Fillable Form', 'Eviction Removal Packet', 'Eviction Removal Instructions with Credit Agency info', 'https://franklincountymunicourt.sharepoint.com/sites/SelfHelp/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSelfHelp%2FShared%20Documents%2FSelf%20Help%20Resource%20Center%2FHandouts%20for%20the%20Public%2FHousing%2FEviction%20Removal%20Packet&p=true&ga=1', '2025-03-25', 1);


INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (1, 0, 'Text', 'Do you have a 3 or 30 day notice?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (2, 0, 'Text', 'Are you in subsidized housing?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (3, 0, 'Text', 'Are you in subsidized housing?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (4, 0, 'Text', 'Did you successfully mediate?', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (5, 1, 'Text', 'Legal Aid Society.', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (6, 1, 'Text', 'More information needed.', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (7, 1, 'Text', 'Resources and Chat', 'English');
INSERT INTO Decision_Node(node_id, is_leaf, display_type, question, node_language) VALUES (8, 1, 'Text', 'Congrats, but additional resources may be available.', 'English');


INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (1, 2, '30 Day');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (1, 3, '3 Day');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (2, 5, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (2, 6, 'No');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (3, 5, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (3, 4, 'No');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (4, 8, 'Yes');
INSERT INTO Question_Answer(parent_node, child_node, answer) VALUES (4, 7, 'No');


INSERT INTO FAQ(faq_id, question, answer) VALUES (1, 'Eviction Removal', 'You can apply to ask the judge to remove your name from the eviction case. Attached is the application you need for that. If the judge agrees to remove your name, then you can file disputes with whatever 3rd party credit agencies are reporting the case.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (2, 'Eviction instructions', 'The first thing you need to do is post a notice to leave the premises (attached). You have to give three full days to leave, and your final day can''t be a holiday or weekend day. Make sure you keep a copy of the notice for yourself as you''ll need to attach it as evidence to your complaint. After the days expire, you can then file your complaint (attached). Make sure everything on your complaint matches up with what you put on your notice. You''ll also need to attach a copy of the lease if there is one.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (3, 'Security Deposit Returns', 'The first is a packet detailing steps to take when your landlord hasn''t returned your security deposit. The usual first step is sending them a letter and giving them a month to respond. There is an example in the packet along with additional information.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (4, 'Eviction Magistraite Objection', 'You need to fill this out to explain to the judge what happened. In the objection, you need to briefly explain why you weren''t there at the hearing, and then you need to explain what you would have said at the hearing if you were there. Explain what you would have said that would make the outcome different - why you would''ve won this case instead of your landlord. The bottom is your certificate of service. You will write your name in the first blank, then today''s date, and sign.');
INSERT INTO FAQ(faq_id, question, answer) VALUES (5, 'Credit Agency Info for Eviction Removal', 'Document here with information for 3 credit agencies we see most often reporting these cases. Request your transcripts with them. If this case is showing up, after you hear back from the Court, if the judge agrees to remove the case from online access, you can dispute those transcripts.');


INSERT INTO Node_Resource(node_id, resource_id) VALUES (5, 1);
INSERT INTO Node_Resource(node_id, resource_id) VALUES (7, 2);


INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (1, 13);
INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (2, 14);
INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (3, 15);
INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (4, 16);
INSERT INTO FAQ_Resource(faq_id, resource_id) VALUES (5, 17);
