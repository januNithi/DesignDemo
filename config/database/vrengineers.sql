-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 29. Dez 2016 um 14:20
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
  `id` int(11) NOT NULL,
  `IteamCode` varchar(10) NOT NULL,
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

INSERT INTO `additeam` (`id`, `IteamCode`, `Name`, `Qty`, `purchaseBy`, `invoiceNo`, `location`, `shopeName`) VALUES
(1, 'IT0001', 'warmpsoft', '100pic', 'mohan', 'IN001', 'Gandhipuram', 'VR Enterprise');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `addmachine`
--

CREATE TABLE `addmachine` (
  `id` int(11) NOT NULL,
  `MachineId` varchar(10) NOT NULL,
  `Machinemake` varchar(20) NOT NULL,
  `MachineName` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `addmachine`
--

INSERT INTO `addmachine` (`id`, `MachineId`, `Machinemake`, `MachineName`, `Description`) VALUES
(1, 'MC001', 'HONDA', 'WINDING', 'Using Winding');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `addprocess`
--

CREATE TABLE `addprocess` (
  `id` int(11) NOT NULL,
  `ItemCode` varchar(20) NOT NULL,
  `ProcessName` varchar(20) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `Description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `addprocess`
--

INSERT INTO `addprocess` (`id`, `ItemCode`, `ProcessName`, `Status`, `Description`) VALUES
(1, 'IT001', 'Winding', 'process', 'cost Mat');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `empId` varchar(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Mob` varchar(15) NOT NULL,
  `Shift` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `employee`
--

INSERT INTO `employee` (`id`, `empId`, `Name`, `Mob`, `Shift`) VALUES
(1, 'mohan001', 'Raj', '2147483647', 'DAY SHIFT');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `additeam`
--
ALTER TABLE `additeam`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `addmachine`
--
ALTER TABLE `addmachine`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `addprocess`
--
ALTER TABLE `addprocess`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `additeam`
--
ALTER TABLE `additeam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT für Tabelle `addmachine`
--
ALTER TABLE `addmachine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT für Tabelle `addprocess`
--
ALTER TABLE `addprocess`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT für Tabelle `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
