CREATE TABLE 'client' (
    'clientId' int(10) NOT NULL AUTO_INCREMENT,
    'client_last_name' varchar(128) NOT NULL,
    'client_first_name' varchar(128) NOT NULL,
    'email' varchar(25) NOT NULL,
    'phone_number' varchar(10) NOT NULL,
    PRIMARY KEY ('clientId'),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

CREATE TABLE 'room' (
    'roomId' int(100) NOT NULL AUTO_INCREMENT,
    'description' varchar(200) NOT NULL, 
    'bed_type' enum ('Single Bed', 'Double Bed', 'King Bed', 'Twin Bed') NOT NULL
    'adults_number' int(3) NOT NULL,
    'children_number' int(3) NOT NULL,
    'is_reserved' tinyint(4) NOT NULL DEFAULT 0,
    'price_per_night' int(5) NOT NULL,
 PRIMARY KEY ('roomId'),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

CREATE TABLE 'reservation' (
'reservationId' int(200),
'checkIn_Date' datetime NOT NULL,
'checkOut_Date' datetime NOT NULL,
'is_active' tinyint(4) NOT NULL,
'client_code' int(10) NOT NULL,
 PRIMARY KEY ('reservationId'),
 CONSTRAINT `FK_ClientCode` FOREIGN KEY (`client_code`) REFERENCES `client` (`clientId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

CREATE TABLE 'reservations_inventory' (
    'inventoryId' int(1000) NOT NULL,
    'room_code' int(100) NOT NULL,
    'reservation_code' int(200) NOT NULL,
    PRIMARY KEY ('inventoryId'),
    CONSTRAINT `FK_RoomCode` FOREIGN KEY (`room_code`) REFERENCES `room` (`roomId`) ON DELETE NO ACTION ON UPDATE NO ACTION
    CONSTRAINT `FK_ReservationCode` FOREIGN KEY (`reservation_code`) REFERENCES `reservation` (`reservationId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;