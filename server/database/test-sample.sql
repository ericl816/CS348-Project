-- QUERY 1
-- Selecting all users
SELECT * FROM users

-- QUERY 2
SELECT * FROM users
WHERE id = 1

-- QUERY 3
-- Selecting by name
SELECT * FROM users
WHERE name = 'Eric'

-- QUERY 4
-- Selecting by email
SELECT * FROM users
WHERE email = 'test@gmail.com'

-- QUERY 5
-- Inserting an invalid user with duplicate email
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (2, 'Test 5', '1', 'test@gmail.com', 'test1234', '123 Test Lane', 'Waterloo', 'N0B1N0');
UNLOCK TABLES;

-- Should be empty
SELECT * FROM users
WHERE id = 2

-- QUERY 6
-- Inserting a valid user
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (2, 'Test 6', '2', 'test1@gmail.com', 'test1234', 'Spadina Test Avenue', 'Toronto', 'W0B4N7');
UNLOCK TABLES;

SELECT * FROM users
WHERE id = 2

-- QUERY 7
-- Updating an existing user
LOCK TABLES `users` WRITE;
UPDATE `users` SET firstName = 'Test 7', lastName = '3', street = 'Spadina Test Street', zipCode = 'W0B4N8'
WHERE id = 2;
UNLOCK TABLES;

SELECT * FROM users
WHERE id = 2

-- QUERY 8
-- Deleting an existing user
LOCK TABLES `users` WRITE;
DELETE FROM `users` WHERE id = 2;
UNLOCK TABLES;

-- Should be empty
SELECT * FROM users
WHERE id = 2


-- TODO: Add more tests for other tables



