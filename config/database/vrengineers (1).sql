-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.27 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for vrengineers
CREATE DATABASE IF NOT EXISTS `vrengineers` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `vrengineers`;


-- Dumping structure for table vrengineers.additeam
CREATE TABLE IF NOT EXISTS `additeam` (
  `IteamCode` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Qty` varchar(20) NOT NULL,
  `purchaseBy` varchar(20) NOT NULL,
  `invoiceNo` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `shopeName` varchar(20) NOT NULL,
  PRIMARY KEY (`IteamCode`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.additeam: ~1 rows (approximately)
DELETE FROM `additeam`;
/*!40000 ALTER TABLE `additeam` DISABLE KEYS */;
INSERT INTO `additeam` (`IteamCode`, `Name`, `Qty`, `purchaseBy`, `invoiceNo`, `location`, `shopeName`) VALUES
	(1, 'warmpsoft', '100pic', 'mohan', 'IN002', 'Gandhipuram', 'VR Enterprise');
/*!40000 ALTER TABLE `additeam` ENABLE KEYS */;


-- Dumping structure for table vrengineers.addmachine
CREATE TABLE IF NOT EXISTS `addmachine` (
  `MachineId` int(11) NOT NULL,
  `Machinemake` varchar(20) NOT NULL,
  `MachineName` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL,
  PRIMARY KEY (`MachineId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.addmachine: ~1 rows (approximately)
DELETE FROM `addmachine`;
/*!40000 ALTER TABLE `addmachine` DISABLE KEYS */;
INSERT INTO `addmachine` (`MachineId`, `Machinemake`, `MachineName`, `Description`) VALUES
	(1, 'HONDA', 'WINDING', 'Using Winding');
/*!40000 ALTER TABLE `addmachine` ENABLE KEYS */;


-- Dumping structure for table vrengineers.addprocess
CREATE TABLE IF NOT EXISTS `addprocess` (
  `ProcessName` varchar(20) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL,
  `itemCode` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.addprocess: ~1 rows (approximately)
DELETE FROM `addprocess`;
/*!40000 ALTER TABLE `addprocess` DISABLE KEYS */;
INSERT INTO `addprocess` (`ProcessName`, `Status`, `Description`, `itemCode`, `id`) VALUES
	('Winding', 'OutProcess', 'cost Mat', 1, 3);
/*!40000 ALTER TABLE `addprocess` ENABLE KEYS */;


-- Dumping structure for table vrengineers.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `empId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Mob` varchar(15) NOT NULL,
  `Shift` varchar(10) NOT NULL,
  PRIMARY KEY (`empId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.employee: ~1 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`empId`, `Name`, `Mob`, `Shift`) VALUES
	(1, 'Raj', '2147483647', 'DAY SHIFT');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;


-- Dumping structure for table vrengineers.workorderentry
CREATE TABLE IF NOT EXISTS `workorderentry` (
  `id` int(11) DEFAULT NULL,
  `item_code` int(11) DEFAULT NULL,
  `cus_name` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `process_qty` varchar(50) DEFAULT NULL,
  `purchase_ord_no` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `enter_by` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.workorderentry: ~0 rows (approximately)
DELETE FROM `workorderentry`;
/*!40000 ALTER TABLE `workorderentry` DISABLE KEYS */;
/*!40000 ALTER TABLE `workorderentry` ENABLE KEYS */;


-- Dumping structure for table vrengineers.work_process
CREATE TABLE IF NOT EXISTS `work_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `machineId` int(11) NOT NULL DEFAULT '0',
  `wrk_ord_no` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `ok_qty` varchar(50) DEFAULT NULL,
  `rjct_qty` varchar(50) DEFAULT NULL,
  `nxt_process` int(11) DEFAULT NULL,
  `crnt_process` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table vrengineers.work_process: ~0 rows (approximately)
DELETE FROM `work_process`;
/*!40000 ALTER TABLE `work_process` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_process` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
