<<<<<<< HEAD
-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               12.0.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for bikeshare
CREATE DATABASE IF NOT EXISTS `bikeshare` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_uca1400_ai_ci */;
USE `bikeshare`;

-- Dumping structure for table bikeshare.bike
CREATE TABLE IF NOT EXISTS `bike` (
  `bike_id` int(11) NOT NULL,
  `station_id` int(11) DEFAULT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `brand` varchar(30) NOT NULL,
  `color` varchar(30) NOT NULL,
  `framenum` int(11) NOT NULL,
  PRIMARY KEY (`bike_id`),
  UNIQUE KEY `framenum` (`framenum`),
  KEY `station_id` (`station_id`),
  CONSTRAINT `bike_ibfk_1` FOREIGN KEY (`station_id`) REFERENCES `station` (`station_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.bike: ~30 rows (approximately)
INSERT INTO `bike` (`bike_id`, `station_id`, `latitude`, `longitude`, `brand`, `color`, `framenum`) VALUES
	(1, 1, 47.123, 7.255, 'Trek', 'black', 10001),
	(2, 2, 47.124, 7.253, 'Giant', 'red', 10002),
	(3, 3, 47.125, 7.251, 'Scott', 'blue', 10003),
	(4, 4, 47.126, 7.249, 'Cube', 'green', 10004),
	(5, 5, 47.127, 7.247, 'Canyon', 'yellow', 10005),
	(6, 1, 47.128, 7.245, 'Trek', 'red', 10006),
	(7, 2, 47.129, 7.243, 'Giant', 'blue', 10007),
	(8, 3, 47.13, 7.241, 'Scott', 'black', 10008),
	(9, 4, 47.131, 7.239, 'Cube', 'yellow', 10009),
	(10, 5, 47.132, 7.237, 'Canyon', 'green', 10010),
	(11, 1, 47.133, 7.235, 'Trek', 'blue', 10011),
	(12, 2, 47.134, 7.233, 'Giant', 'black', 10012),
	(13, 3, 47.135, 7.231, 'Scott', 'yellow', 10013),
	(14, 4, 47.136, 7.229, 'Cube', 'red', 10014),
	(15, 5, 47.137, 7.227, 'Canyon', 'black', 10015),
	(16, 1, 47.138, 7.225, 'Trek', 'yellow', 10016),
	(17, 2, 47.139, 7.223, 'Giant', 'green', 10017),
	(18, 3, 47.14, 7.221, 'Scott', 'red', 10018),
	(19, 4, 47.141, 7.219, 'Cube', 'blue', 10019),
	(20, 5, 47.142, 7.217, 'Canyon', 'black', 10020),
	(21, 1, 47.143, 7.215, 'Trek', 'green', 10021),
	(22, 2, 47.144, 7.213, 'Giant', 'yellow', 10022),
	(23, 3, 47.145, 7.211, 'Scott', 'blue', 10023),
	(24, 4, 47.146, 7.209, 'Cube', 'black', 10024),
	(25, 5, 47.147, 7.207, 'Canyon', 'red', 10025),
	(26, 1, 47.148, 7.205, 'Trek', 'black', 10026),
	(27, 2, 47.149, 7.203, 'Giant', 'blue', 10027),
	(28, 3, 47.15, 7.201, 'Scott', 'green', 10028),
	(29, 4, 47.151, 7.199, 'Cube', 'yellow', 10029),
	(30, 5, 47.152, 7.197, 'Canyon', 'blue', 10030);

-- Dumping structure for table bikeshare.discount
CREATE TABLE IF NOT EXISTS `discount` (
  `discount_id` int(11) NOT NULL,
  `discount_code` varchar(50) NOT NULL DEFAULT '',
  `discount_per` int(11) NOT NULL,
  `num_of_use` float DEFAULT NULL,
  `ex_date` date NOT NULL,
  PRIMARY KEY (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.discount: ~10 rows (approximately)
INSERT INTO `discount` (`discount_id`, `discount_code`, `discount_per`, `num_of_use`, `ex_date`) VALUES
	(1, 'MeatEatingHorse', 100, 1, '2025-05-01'),
	(2, 'BIELSPRING2025', 10, 50, '2025-06-15'),
	(3, 'VELOLOVE20', 20, 100, '2025-03-31'),
	(4, 'BIKERABATT5', 5, 100, '2025-12-31'),
	(5, 'TWINTSPECIAL30', 30, 20, '2025-04-10'),
	(6, 'COMMUTEBOOST15', 15, 50, '2025-07-01'),
	(7, 'MEGARIDE50', 50, 20, '2025-03-05'),
	(8, 'SUMMERBIEL12', 12, 50, '2025-08-01'),
	(9, 'GREENWHEELS8', 8, NULL, '2025-09-20'),
	(10, 'AUTUMNRIDE18', 18, 100, '2025-10-01');

-- Dumping structure for table bikeshare.maintanance
CREATE TABLE IF NOT EXISTS `maintanance` (
  `maintanance_id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `ride_id` int(11) DEFAULT NULL,
  `responsible_employee` int(11) DEFAULT NULL,
  `issue_report` varchar(50) DEFAULT NULL,
  `last_customer` int(11) DEFAULT NULL,
  `issue_date` datetime NOT NULL,
  `fix_complete` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`maintanance_id`),
  KEY `last_customer` (`last_customer`),
  KEY `bike_id` (`bike_id`),
  KEY `ride_id` (`ride_id`),
  CONSTRAINT `maintanance_ibfk_1` FOREIGN KEY (`last_customer`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `maintanance_ibfk_2` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`bike_id`),
  CONSTRAINT `maintanance_ibfk_3` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.maintanance: ~6 rows (approximately)
INSERT INTO `maintanance` (`maintanance_id`, `bike_id`, `ride_id`, `responsible_employee`, `issue_report`, `last_customer`, `issue_date`, `fix_complete`) VALUES
	(1, 3, 1, 1, 'Reifen ersetzt', 6, '2024-12-03 10:00:00', 1),
	(2, 8, 7, 4, 'Kette nachgezogen', 7, '2025-01-14 09:20:00', 1),
	(3, 15, 5, 5, 'Sattel erneuert', 2, '2024-10-06 14:40:00', 1),
	(4, 19, 6, 1, 'Gangschaltung justiert', 2, '2024-09-29 12:10:00', 1),
	(5, 30, 16, 4, 'Vorderrad ersetzt', 2, '2024-12-10 11:30:00', 1),
	(6, 22, 11, 1, 'Bremse schwach – Prüfung offen', 1, '2024-11-27 19:30:00', 0);

-- Dumping structure for table bikeshare.payment
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` int(11) NOT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `ride_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `discount_id` int(11) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `payment_upcoming` date DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `persona_id` (`persona_id`),
  KEY `ride_id` (`ride_id`),
  KEY `subscription_id` (`subscription_id`),
  KEY `discount_id` (`discount_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`),
  CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`subscription_id`),
  CONSTRAINT `payment_ibfk_4` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.payment: ~10 rows (approximately)
INSERT INTO `payment` (`payment_id`, `persona_id`, `ride_id`, `subscription_id`, `discount_id`, `payment_date`, `payment_upcoming`) VALUES
	(1, 1, NULL, 1, NULL, '2024-12-02', NULL),
	(2, 3, 11, 2, NULL, '2024-11-27', NULL),
	(3, 4, NULL, 1, NULL, '2024-10-08', NULL),
	(4, 6, NULL, 4, NULL, '2025-01-12', NULL),
	(5, 7, NULL, 5, NULL, '2024-07-21', NULL),
	(6, 2, NULL, 3, NULL, NULL, '2025-03-01'),
	(7, 5, NULL, 1, NULL, NULL, '2025-03-10'),
	(8, 8, NULL, 3, NULL, NULL, '2025-04-03'),
	(9, 9, 17, 2, NULL, NULL, '2025-03-15'),
	(10, 10, NULL, 5, NULL, NULL, '2025-05-01');

-- Dumping structure for table bikeshare.persona
CREATE TABLE IF NOT EXISTS `persona` (
  `persona_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phonenum` int(11) DEFAULT NULL,
  `password` varchar(30) NOT NULL,
  `adress` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `zipcode` int(11) NOT NULL,
  `subscription_id` int(11) NOT NULL,
  `payment_method` varchar(30) DEFAULT NULL,
  `account_created` date NOT NULL,
  PRIMARY KEY (`persona_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phonenum` (`phonenum`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`subscription_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.persona: ~10 rows (approximately)
INSERT INTO `persona` (`persona_id`, `username`, `firstname`, `lastname`, `email`, `phonenum`, `password`, `adress`, `city`, `zipcode`, `subscription_id`, `payment_method`, `account_created`) VALUES
	(1, 'vabi', 'Samuel', 'Vabulari', 'samuel.vabulari@mail.ch', 791112233, 'pass123', 'Zihlgasse 12', 'Biel', 2502, 1, 'twint', '2022-03-14'),
	(2, 'michiii', 'Michael', 'Bucher', 'michael.bucher@mail.ch', 785559911, 'mbucher21', 'Bahnhofstrasse 5', 'Biel', 2501, 3, 'kreditkarte', '2023-01-22'),
	(3, 'johanneskannes', 'Johannes', 'von Gunten', 'johannes.vg@mail.ch', 764488201, 'securepwd', 'Solothurnstrasse 88', 'Biel', 2504, 2, 'rechnung', '2021-11-05'),
	(4, 'bobzigi', 'Bob', 'Zigarillo', 'bob.zigarillo@mail.ch', 799998888, 'bobzig123', 'Lindenweg 7', 'Biel', 2503, 1, 'twint', '2024-02-10'),
	(5, 'tanja.k', 'Tanja', 'Keller', 'tanja.keller@mail.ch', 782201133, 'tanja22', 'Centralstrasse 14', 'Biel', 2502, 1, 'kreditkarte', '2023-06-18'),
	(6, 'flavio.s', 'Flavio', 'Schneider', 'flavio.sch@mail.ch', 783344122, 'fla2023', 'Gottstattstrasse 33', 'Biel', 2503, 4, 'twint', '2022-09-07'),
	(7, 'laura89', 'Laura', 'Imboden', 'laura.imboden@mail.ch', 765538199, 'laura_pwd', 'Jurastrasse 20', 'Biel', 2502, 5, 'rechnung', '2023-04-03'),
	(8, 'OmgItsJasonB', 'Jason', 'Bourne', 'peter.kaufmann@mail.ch', 793317788, 'peterpw', 'Neumarkt 2', 'Biel', 2501, 3, 'kreditkarte', '2022-01-09'),
	(9, 'sarah21', 'Sarah', 'Moser', 'sarah.moser@mail.ch', 784567100, 'smoser', 'Rue de la Gare 8', 'Biel', 2501, 2, 'twint', '2021-08-25'),
	(10, 'andrew.h', 'Andrew', 'Häusler', 'andrew.hausler@mail.ch', 768824411, 'haus22', 'Bözingenstrasse 60', 'Biel', 2504, 5, 'kreditkarte', '2024-01-15');

-- Dumping structure for table bikeshare.ride
CREATE TABLE IF NOT EXISTS `ride` (
  `ride_id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `ride_feedback` int(11) DEFAULT NULL,
  `customer_comment` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ride_id`),
  KEY `persona_id` (`persona_id`),
  KEY `bike_id` (`bike_id`),
  CONSTRAINT `ride_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `ride_ibfk_2` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`bike_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.ride: ~20 rows (approximately)
INSERT INTO `ride` (`ride_id`, `bike_id`, `persona_id`, `start_time`, `end_time`, `ride_feedback`, `customer_comment`) VALUES
	(1, 3, 1, '2024-12-01 09:15:00', '2024-12-01 09:32:00', 5, 'Sehr angenehm'),
	(2, 7, 3, '2024-11-22 14:10:00', '2024-11-22 14:25:00', 4, NULL),
	(3, 12, 4, '2024-12-10 18:30:00', '2024-12-10 18:51:00', 5, 'Top'),
	(4, 8, 6, '2025-01-13 08:05:00', '2025-01-13 08:29:00', 3, NULL),
	(5, 15, 7, '2024-10-05 16:10:00', '2024-10-05 16:45:00', 4, 'Schönes Wetter'),
	(6, 19, 2, '2024-09-28 11:00:00', '2024-09-28 11:19:00', 4, 'Gutes Bike'),
	(7, 5, 8, '2024-08-15 13:55:00', '2024-08-15 14:20:00', 5, NULL),
	(8, 2, 9, '2024-07-12 09:40:00', '2024-07-12 10:02:00', 3, 'War okay'),
	(9, 21, 10, '2024-06-03 17:15:00', '2024-06-03 17:31:00', 5, NULL),
	(10, 1, 1, '2024-12-15 10:10:00', '2024-12-15 10:28:00', 4, NULL),
	(11, 22, 3, '2024-11-27 19:00:00', '2024-11-27 19:17:00', 2, 'Bremse schwach'),
	(12, 18, 2, '2024-10-10 08:22:00', '2024-10-10 08:44:00', 5, NULL),
	(13, 9, 5, '2024-09-08 15:00:00', '2024-09-08 15:26:00', 5, 'Sehr gut'),
	(14, 14, 6, '2024-12-20 07:45:00', '2024-12-20 08:12:00', 4, NULL),
	(15, 25, 7, '2024-11-30 12:10:00', '2024-11-30 12:39:00', 5, 'Schöner Ride'),
	(16, 30, 4, '2024-12-09 09:33:00', '2024-12-09 09:55:00', 5, NULL),
	(17, 11, 9, '2024-07-19 17:44:00', '2024-07-19 18:05:00', 3, 'Okay'),
	(18, 28, 10, '2024-08-29 14:20:00', '2024-08-29 14:51:00', 4, NULL),
	(19, 6, 6, '2025-01-05 18:22:00', '2025-01-05 18:45:00', 3, NULL),
	(20, 13, 8, '2024-09-14 10:11:00', '2024-09-14 10:37:00', 4, 'Passt');

-- Dumping structure for table bikeshare.station
CREATE TABLE IF NOT EXISTS `station` (
  `station_id` int(11) NOT NULL,
  `station_street` varchar(30) DEFAULT NULL,
  `capacity` int(11) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  PRIMARY KEY (`station_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.station: ~5 rows (approximately)
INSERT INTO `station` (`station_id`, `station_street`, `capacity`, `latitude`, `longitude`) VALUES
	(1, 'Bahnhof Biel', 25, 47.1329, 7.242),
	(2, 'Nidaugasse', 20, 47.1378, 7.2439),
	(3, 'Kongresshaus', 18, 47.1395, 7.2531),
	(4, 'Tissot Arena', 30, 47.1253, 7.2458),
	(5, 'Strandboden', 15, 47.1442, 7.2325);

-- Dumping structure for table bikeshare.subscription
CREATE TABLE IF NOT EXISTS `subscription` (
  `subscription_id` int(11) NOT NULL,
  `subscription_name` varchar(50) NOT NULL DEFAULT '',
  `free_time_per_day` time NOT NULL,
  `num_of_bikes` int(11) NOT NULL,
  `price_per_month` float NOT NULL,
  `price_per_minute` float NOT NULL,
  `subscription_runtime_days` int(11) DEFAULT NULL,
  PRIMARY KEY (`subscription_id`),
  UNIQUE KEY `Index 2` (`subscription_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.subscription: ~5 rows (approximately)
INSERT INTO `subscription` (`subscription_id`, `subscription_name`, `free_time_per_day`, `num_of_bikes`, `price_per_month`, `price_per_minute`, `subscription_runtime_days`) VALUES
	(1, 'employee', '24:00:00', 2, 0, 0, NULL),
	(2, 'free', '00:00:00', 1, 0, 0.35, NULL),
	(3, 'commute basic', '02:00:00', 1, 19.95, 0.35, 30),
	(4, 'commute plus', '06:00:00', 1, 24.95, 0.2, 30),
	(5, 'commute friends', '06:00:00', 3, 29.95, 0.2, 30);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
=======
-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               12.0.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for bikeshare
CREATE DATABASE IF NOT EXISTS `bikeshare` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_uca1400_ai_ci */;
USE `bikeshare`;

-- Dumping structure for table bikeshare.bike
CREATE TABLE IF NOT EXISTS `bike` (
  `bike_id` int(11) NOT NULL,
  `station_id` int(11) DEFAULT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `brand` varchar(30) NOT NULL,
  `color` varchar(30) NOT NULL,
  `framenum` int(11) NOT NULL,
  PRIMARY KEY (`bike_id`),
  UNIQUE KEY `framenum` (`framenum`),
  KEY `station_id` (`station_id`),
  CONSTRAINT `bike_ibfk_1` FOREIGN KEY (`station_id`) REFERENCES `station` (`station_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.bike: ~30 rows (approximately)
INSERT INTO `bike` (`bike_id`, `station_id`, `latitude`, `longitude`, `brand`, `color`, `framenum`) VALUES
	(1, 1, 47.123, 7.255, 'Trek', 'black', 10001),
	(2, 2, 47.124, 7.253, 'Giant', 'red', 10002),
	(3, 3, 47.125, 7.251, 'Scott', 'blue', 10003),
	(4, 4, 47.126, 7.249, 'Cube', 'green', 10004),
	(5, 5, 47.127, 7.247, 'Canyon', 'yellow', 10005),
	(6, 1, 47.128, 7.245, 'Trek', 'red', 10006),
	(7, 2, 47.129, 7.243, 'Giant', 'blue', 10007),
	(8, 3, 47.13, 7.241, 'Scott', 'black', 10008),
	(9, 4, 47.131, 7.239, 'Cube', 'yellow', 10009),
	(10, 5, 47.132, 7.237, 'Canyon', 'green', 10010),
	(11, 1, 47.133, 7.235, 'Trek', 'blue', 10011),
	(12, 2, 47.134, 7.233, 'Giant', 'black', 10012),
	(13, 3, 47.135, 7.231, 'Scott', 'yellow', 10013),
	(14, 4, 47.136, 7.229, 'Cube', 'red', 10014),
	(15, 5, 47.137, 7.227, 'Canyon', 'black', 10015),
	(16, 1, 47.138, 7.225, 'Trek', 'yellow', 10016),
	(17, 2, 47.139, 7.223, 'Giant', 'green', 10017),
	(18, 3, 47.14, 7.221, 'Scott', 'red', 10018),
	(19, 4, 47.141, 7.219, 'Cube', 'blue', 10019),
	(20, 5, 47.142, 7.217, 'Canyon', 'black', 10020),
	(21, 1, 47.143, 7.215, 'Trek', 'green', 10021),
	(22, 2, 47.144, 7.213, 'Giant', 'yellow', 10022),
	(23, 3, 47.145, 7.211, 'Scott', 'blue', 10023),
	(24, 4, 47.146, 7.209, 'Cube', 'black', 10024),
	(25, 5, 47.147, 7.207, 'Canyon', 'red', 10025),
	(26, 1, 47.148, 7.205, 'Trek', 'black', 10026),
	(27, 2, 47.149, 7.203, 'Giant', 'blue', 10027),
	(28, 3, 47.15, 7.201, 'Scott', 'green', 10028),
	(29, 4, 47.151, 7.199, 'Cube', 'yellow', 10029),
	(30, 5, 47.152, 7.197, 'Canyon', 'blue', 10030);

-- Dumping structure for table bikeshare.discount
CREATE TABLE IF NOT EXISTS `discount` (
  `discount_id` int(11) NOT NULL,
  `discount_code` varchar(50) NOT NULL DEFAULT '',
  `discount_per` int(11) NOT NULL,
  `num_of_use` float DEFAULT NULL,
  `ex_date` date NOT NULL,
  PRIMARY KEY (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.discount: ~10 rows (approximately)
INSERT INTO `discount` (`discount_id`, `discount_code`, `discount_per`, `num_of_use`, `ex_date`) VALUES
	(1, 'MeatEatingHorse', 100, 1, '2025-05-01'),
	(2, 'BIELSPRING2025', 10, 50, '2025-06-15'),
	(3, 'VELOLOVE20', 20, 100, '2025-03-31'),
	(4, 'BIKERABATT5', 5, 100, '2025-12-31'),
	(5, 'TWINTSPECIAL30', 30, 20, '2025-04-10'),
	(6, 'COMMUTEBOOST15', 15, 50, '2025-07-01'),
	(7, 'MEGARIDE50', 50, 20, '2025-03-05'),
	(8, 'SUMMERBIEL12', 12, 50, '2025-08-01'),
	(9, 'GREENWHEELS8', 8, NULL, '2025-09-20'),
	(10, 'AUTUMNRIDE18', 18, 100, '2025-10-01');

-- Dumping structure for table bikeshare.maintanance
CREATE TABLE IF NOT EXISTS `maintanance` (
  `maintanance_id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `ride_id` int(11) DEFAULT NULL,
  `responsible_employee` int(11) DEFAULT NULL,
  `issue_report` varchar(50) DEFAULT NULL,
  `last_customer` int(11) DEFAULT NULL,
  `issue_date` datetime NOT NULL,
  `fix_complete` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`maintanance_id`),
  KEY `last_customer` (`last_customer`),
  KEY `bike_id` (`bike_id`),
  KEY `ride_id` (`ride_id`),
  CONSTRAINT `maintanance_ibfk_1` FOREIGN KEY (`last_customer`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `maintanance_ibfk_2` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`bike_id`),
  CONSTRAINT `maintanance_ibfk_3` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.maintanance: ~6 rows (approximately)
INSERT INTO `maintanance` (`maintanance_id`, `bike_id`, `ride_id`, `responsible_employee`, `issue_report`, `last_customer`, `issue_date`, `fix_complete`) VALUES
	(1, 3, 1, 1, 'Reifen ersetzt', 6, '2024-12-03 10:00:00', 1),
	(2, 8, 7, 4, 'Kette nachgezogen', 7, '2025-01-14 09:20:00', 1),
	(3, 15, 5, 5, 'Sattel erneuert', 2, '2024-10-06 14:40:00', 1),
	(4, 19, 6, 1, 'Gangschaltung justiert', 2, '2024-09-29 12:10:00', 1),
	(5, 30, 16, 4, 'Vorderrad ersetzt', 2, '2024-12-10 11:30:00', 1),
	(6, 22, 11, 1, 'Bremse schwach – Prüfung offen', 1, '2024-11-27 19:30:00', 0);

-- Dumping structure for table bikeshare.payment
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` int(11) NOT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `ride_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `discount_id` int(11) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `payment_upcoming` date DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `persona_id` (`persona_id`),
  KEY `ride_id` (`ride_id`),
  KEY `subscription_id` (`subscription_id`),
  KEY `discount_id` (`discount_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`),
  CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`subscription_id`),
  CONSTRAINT `payment_ibfk_4` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.payment: ~10 rows (approximately)
INSERT INTO `payment` (`payment_id`, `persona_id`, `ride_id`, `subscription_id`, `discount_id`, `payment_date`, `payment_upcoming`) VALUES
	(1, 1, NULL, 1, NULL, '2024-12-02', NULL),
	(2, 3, 11, 2, NULL, '2024-11-27', NULL),
	(3, 4, NULL, 1, NULL, '2024-10-08', NULL),
	(4, 6, NULL, 4, NULL, '2025-01-12', NULL),
	(5, 7, NULL, 5, NULL, '2024-07-21', NULL),
	(6, 2, NULL, 3, NULL, NULL, '2025-03-01'),
	(7, 5, NULL, 1, NULL, NULL, '2025-03-10'),
	(8, 8, NULL, 3, NULL, NULL, '2025-04-03'),
	(9, 9, 17, 2, NULL, NULL, '2025-03-15'),
	(10, 10, NULL, 5, NULL, NULL, '2025-05-01');

-- Dumping structure for table bikeshare.persona
CREATE TABLE IF NOT EXISTS `persona` (
  `persona_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phonenum` int(11) DEFAULT NULL,
  `password` varchar(30) NOT NULL,
  `adress` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `zipcode` int(11) NOT NULL,
  `subscription_id` int(11) NOT NULL,
  `payment_method` varchar(30) DEFAULT NULL,
  `account_created` date NOT NULL,
  PRIMARY KEY (`persona_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phonenum` (`phonenum`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`subscription_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.persona: ~10 rows (approximately)
INSERT INTO `persona` (`persona_id`, `username`, `firstname`, `lastname`, `email`, `phonenum`, `password`, `adress`, `city`, `zipcode`, `subscription_id`, `payment_method`, `account_created`) VALUES
	(1, 'vabi', 'Samuel', 'Vabulari', 'samuel.vabulari@mail.ch', 791112233, 'pass123', 'Zihlgasse 12', 'Biel', 2502, 1, 'twint', '2022-03-14'),
	(2, 'michiii', 'Michael', 'Bucher', 'michael.bucher@mail.ch', 785559911, 'mbucher21', 'Bahnhofstrasse 5', 'Biel', 2501, 3, 'kreditkarte', '2023-01-22'),
	(3, 'johanneskannes', 'Johannes', 'von Gunten', 'johannes.vg@mail.ch', 764488201, 'securepwd', 'Solothurnstrasse 88', 'Biel', 2504, 2, 'rechnung', '2021-11-05'),
	(4, 'bobzigi', 'Bob', 'Zigarillo', 'bob.zigarillo@mail.ch', 799998888, 'bobzig123', 'Lindenweg 7', 'Biel', 2503, 1, 'twint', '2024-02-10'),
	(5, 'tanja.k', 'Tanja', 'Keller', 'tanja.keller@mail.ch', 782201133, 'tanja22', 'Centralstrasse 14', 'Biel', 2502, 1, 'kreditkarte', '2023-06-18'),
	(6, 'flavio.s', 'Flavio', 'Schneider', 'flavio.sch@mail.ch', 783344122, 'fla2023', 'Gottstattstrasse 33', 'Biel', 2503, 4, 'twint', '2022-09-07'),
	(7, 'laura89', 'Laura', 'Imboden', 'laura.imboden@mail.ch', 765538199, 'laura_pwd', 'Jurastrasse 20', 'Biel', 2502, 5, 'rechnung', '2023-04-03'),
	(8, 'OmgItsJasonB', 'Jason', 'Bourne', 'peter.kaufmann@mail.ch', 793317788, 'peterpw', 'Neumarkt 2', 'Biel', 2501, 3, 'kreditkarte', '2022-01-09'),
	(9, 'sarah21', 'Sarah', 'Moser', 'sarah.moser@mail.ch', 784567100, 'smoser', 'Rue de la Gare 8', 'Biel', 2501, 2, 'twint', '2021-08-25'),
	(10, 'andrew.h', 'Andrew', 'Häusler', 'andrew.hausler@mail.ch', 768824411, 'haus22', 'Bözingenstrasse 60', 'Biel', 2504, 5, 'kreditkarte', '2024-01-15');

-- Dumping structure for table bikeshare.ride
CREATE TABLE IF NOT EXISTS `ride` (
  `ride_id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `ride_feedback` int(11) DEFAULT NULL,
  `customer_comment` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ride_id`),
  KEY `persona_id` (`persona_id`),
  KEY `bike_id` (`bike_id`),
  CONSTRAINT `ride_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`persona_id`),
  CONSTRAINT `ride_ibfk_2` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`bike_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.ride: ~20 rows (approximately)
INSERT INTO `ride` (`ride_id`, `bike_id`, `persona_id`, `start_time`, `end_time`, `ride_feedback`, `customer_comment`) VALUES
	(1, 3, 1, '2024-12-01 09:15:00', '2024-12-01 09:32:00', 5, 'Sehr angenehm'),
	(2, 7, 3, '2024-11-22 14:10:00', '2024-11-22 14:25:00', 4, NULL),
	(3, 12, 4, '2024-12-10 18:30:00', '2024-12-10 18:51:00', 5, 'Top'),
	(4, 8, 6, '2025-01-13 08:05:00', '2025-01-13 08:29:00', 3, NULL),
	(5, 15, 7, '2024-10-05 16:10:00', '2024-10-05 16:45:00', 4, 'Schönes Wetter'),
	(6, 19, 2, '2024-09-28 11:00:00', '2024-09-28 11:19:00', 4, 'Gutes Bike'),
	(7, 5, 8, '2024-08-15 13:55:00', '2024-08-15 14:20:00', 5, NULL),
	(8, 2, 9, '2024-07-12 09:40:00', '2024-07-12 10:02:00', 3, 'War okay'),
	(9, 21, 10, '2024-06-03 17:15:00', '2024-06-03 17:31:00', 5, NULL),
	(10, 1, 1, '2024-12-15 10:10:00', '2024-12-15 10:28:00', 4, NULL),
	(11, 22, 3, '2024-11-27 19:00:00', '2024-11-27 19:17:00', 2, 'Bremse schwach'),
	(12, 18, 2, '2024-10-10 08:22:00', '2024-10-10 08:44:00', 5, NULL),
	(13, 9, 5, '2024-09-08 15:00:00', '2024-09-08 15:26:00', 5, 'Sehr gut'),
	(14, 14, 6, '2024-12-20 07:45:00', '2024-12-20 08:12:00', 4, NULL),
	(15, 25, 7, '2024-11-30 12:10:00', '2024-11-30 12:39:00', 5, 'Schöner Ride'),
	(16, 30, 4, '2024-12-09 09:33:00', '2024-12-09 09:55:00', 5, NULL),
	(17, 11, 9, '2024-07-19 17:44:00', '2024-07-19 18:05:00', 3, 'Okay'),
	(18, 28, 10, '2024-08-29 14:20:00', '2024-08-29 14:51:00', 4, NULL),
	(19, 6, 6, '2025-01-05 18:22:00', '2025-01-05 18:45:00', 3, NULL),
	(20, 13, 8, '2024-09-14 10:11:00', '2024-09-14 10:37:00', 4, 'Passt');

-- Dumping structure for table bikeshare.station
CREATE TABLE IF NOT EXISTS `station` (
  `station_id` int(11) NOT NULL,
  `station_street` varchar(30) DEFAULT NULL,
  `capacity` int(11) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  PRIMARY KEY (`station_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.station: ~5 rows (approximately)
INSERT INTO `station` (`station_id`, `station_street`, `capacity`, `latitude`, `longitude`) VALUES
	(1, 'Bahnhof Biel', 25, 47.1329, 7.242),
	(2, 'Nidaugasse', 20, 47.1378, 7.2439),
	(3, 'Kongresshaus', 18, 47.1395, 7.2531),
	(4, 'Tissot Arena', 30, 47.1253, 7.2458),
	(5, 'Strandboden', 15, 47.1442, 7.2325);

-- Dumping structure for table bikeshare.subscription
CREATE TABLE IF NOT EXISTS `subscription` (
  `subscription_id` int(11) NOT NULL,
  `subscription_name` varchar(50) NOT NULL DEFAULT '',
  `free_time_per_day` time NOT NULL,
  `num_of_bikes` int(11) NOT NULL,
  `price_per_month` float NOT NULL,
  `price_per_minute` float NOT NULL,
  `subscription_runtime_days` int(11) DEFAULT NULL,
  PRIMARY KEY (`subscription_id`),
  UNIQUE KEY `Index 2` (`subscription_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_uca1400_ai_ci;

-- Dumping data for table bikeshare.subscription: ~5 rows (approximately)
INSERT INTO `subscription` (`subscription_id`, `subscription_name`, `free_time_per_day`, `num_of_bikes`, `price_per_month`, `price_per_minute`, `subscription_runtime_days`) VALUES
	(1, 'employee', '24:00:00', 2, 0, 0, NULL),
	(2, 'free', '00:00:00', 1, 0, 0.35, NULL),
	(3, 'commute basic', '02:00:00', 1, 19.95, 0.35, 30),
	(4, 'commute plus', '06:00:00', 1, 24.95, 0.2, 30),
	(5, 'commute friends', '06:00:00', 3, 29.95, 0.2, 30);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
>>>>>>> db09745d209abec17962b87f1584e7e8c7bf1452
