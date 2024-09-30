#source C:/Users/User/Desktop/Hotel/Server/hotel-website/database/seed/seed.sql;

DROP DATABASE databasehotel;  

CREATE DATABASE databasehotel;
USE databasehotel;

CREATE TABLE `client` (
    `client_id` int(10) NOT NULL AUTO_INCREMENT,
    `last_name` varchar(128) NOT NULL,
    `first_name` varchar(128) NOT NULL,
    `email` varchar(25) NOT NULL,
    `phone_number` varchar(10) NOT NULL,
    PRIMARY KEY (`client_id`),
    UNIQUE KEY `IDX_CLIENT_EMAIL` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

DESCRIBE client;
-- INSERT INTO client VALUES 

-- 	(1,'Claudia', ' Visan', 'claudia23@yahoo.com','0724647563'),
-- 	(2,'Ade', ' Popa', 'adepopa@yahoo.com','0755564563');

-- SELECT * FROM client;

CREATE TABLE `room` (
    `room_id` int(100) NOT NULL AUTO_INCREMENT,
    `description` LONGTEXT NOT NULL, 
    `bed_type` enum('single_bed', 'double_bed', 'king_bed', 'twin_bed') NOT NULL,
    `adults_number` int(3) NOT NULL,
    `children_number` int(3) DEFAULT 0,
    `is_reserved` BOOLEAN NOT NULL DEFAULT 0,
    `price_per_night` int(5) NOT NULL,
    PRIMARY KEY (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

DESCRIBE room;

CREATE TABLE `reservation` (
    `reservation_id` int(200) NOT NULL AUTO_INCREMENT,
    `checkIn_date` datetime NOT NULL,
    `checkOut_date` datetime NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `client_code` int(10) NOT NULL,
    PRIMARY KEY (`reservation_id`),
    CONSTRAINT `FK_client_code` FOREIGN KEY (`client_code`) REFERENCES `client` (`client_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

DESCRIBE reservation;

SELECT * FROM reservation;

CREATE TABLE `reservations_inventory` (
    `inventory_id` int(100) NOT NULL AUTO_INCREMENT,
    `room_code` int(100) NOT NULL,
    `reservation_code` int(200) NOT NULL,
    PRIMARY KEY (`inventory_id`),
    CONSTRAINT `FK_Room_code` FOREIGN KEY (`room_code`) REFERENCES `room` (`room_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `FK_Reservation_code` FOREIGN KEY (`reservation_code`) REFERENCES `reservation` (`reservation_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

DESCRIBE reservations_inventory;