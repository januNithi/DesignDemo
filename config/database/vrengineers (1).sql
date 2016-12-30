-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Dez 2016 um 11:01
-- Server-Version: 10.1.9-MariaDB
-- PHP-Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `vrengineers`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `additeam`
--

CREATE TABLE `additeam` (
  `IteamCode` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Qty` varchar(20) NOT NULL,
  `purchaseBy` varchar(20) NOT NULL,
  `invoiceNo` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `shopeName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `additeam`
--

INSERT INTO `additeam` (`IteamCode`, `Name`, `Qty`, `purchaseBy`, `invoiceNo`, `location`, `shopeName`) VALUES
(1, 'warmpsoft', '100pic', 'mohan', 'IN002', 'Gandhipuram', 'VR Enterprise');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `addmachine`
--

CREATE TABLE `addmachine` (
  `MachineId` int(11) NOT NULL,
  `Machinemake` varchar(20) NOT NULL,
  `MachineName` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `addmachine`
--

INSERT INTO `addmachine` (`MachineId`, `Machinemake`, `MachineName`, `Description`) VALUES
(1, 'HONDA', 'WINDING', 'Using Winding');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `addprocess`
--

CREATE TABLE `addprocess` (
  `ProcessName` varchar(20) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL,
  `itemCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `addprocess`
--

INSERT INTO `addprocess` (`ProcessName`, `Status`, `Description`, `itemCode`) VALUES
('Winding', 'OutProcess', 'cost Mat', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `addworkorder`
--

CREATE TABLE `addworkorder` (
  `stackQty` int(11) NOT NULL,
  `location` int(11) NOT NULL,
  `purchaseNo` int(11) NOT NULL,
  `processStatus` int(11) NOT NULL,
  `workOrderNo` int(11) NOT NULL,
  `customerName` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `processQty` int(11) NOT NULL,
  `entrollBy` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employee`
--

CREATE TABLE `employee` (
  `empId` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Mob` varchar(15) NOT NULL,
  `Shift` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `employee`
--

INSERT INTO `employee` (`empId`, `Name`, `Mob`, `Shift`) VALUES
(1, 'Raj', '2147483647', 'DAY SHIFT');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `additeam`
--
ALTER TABLE `additeam`
  ADD PRIMARY KEY (`IteamCode`);

--
-- Indizes für die Tabelle `addmachine`
--
ALTER TABLE `addmachine`
  ADD PRIMARY KEY (`MachineId`);

--
-- Indizes für die Tabelle `addprocess`
--
ALTER TABLE `addprocess`
  ADD PRIMARY KEY (`itemCode`);

--
-- Indizes für die Tabelle `addworkorder`
--
ALTER TABLE `addworkorder`
  ADD PRIMARY KEY (`workOrderNo`);

--
-- Indizes für die Tabelle `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`empId`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `additeam`
--
ALTER TABLE `additeam`
  MODIFY `IteamCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT für Tabelle `addprocess`
--
ALTER TABLE `addprocess`
  MODIFY `itemCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT für Tabelle `addworkorder`
--
ALTER TABLE `addworkorder`
  MODIFY `workOrderNo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `employee`
--
ALTER TABLE `employee`
  MODIFY `empId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
