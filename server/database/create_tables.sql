DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT
	`firstName` VARCHAR(100) DEFAULT NULL,
	`lastName` VARCHAR(100) DEFAULT NULL,
	`email` VARCHAR(255) NOT NULL,  -- TODO: add check
	`password` VARCHAR(255) NOT NULL,   -- TODO: add check
	`street` VARCHAR(255) DEFAULT NULL,   -- TODO: add check
	`city` VARCHAR(100) DEFAULT NULL,   -- TODO: add check
	`zipCode` VARCHAR(6) DEFAULT NULL,   -- TODO: add check
	PRIMARY KEY (`id`),
	UNIQUE KEY `email` (`email`),
);
