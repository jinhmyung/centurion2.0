import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './(tabs)/Card';
import './index.css'; // Import the CSS file
import Yearcard from './(tabs)/Yearcard';
import ModalButton from './(tabs)/ModalButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('GE');
  const [activeButton, setActiveButton] = useState(null);

  const handleHeaderButtonClick = (buttonName : any) => {
    setActiveButton(buttonName);
  };

  const [cardsGE2, setCardsGE2] = useState<string[]>([]);
  const [cardsGE3, setCardsGE3] = useState<string[]>([]);
  const [cardsGE4, setCardsGE4] = useState<string[]>([]);
  const [cardsGE5a, setCardsGE5a] = useState<string[]>([]);
  const [cardsGE5b, setCardsGE5b] = useState<string[]>([]);
  const [cardsGE6, setCardsGE6] = useState<string[]>([]);
  const [cardsGE7, setCardsGE7] = useState<string[]>([]);
  const [cardsGE8, setCardsGE8] = useState<string[]>([]);
  const [cardsMajor30, setCardsMajor30] = useState<string[]>([]);
  const [cardsMajorElective, setCardsMajorElective] = useState<string[]>([]);

  const optionsGE2 = ['ART HIS 55', 'BIO SCI 12', 'BIO SCI 17', 'BIO SCI 1A', 'BIO SCI 23', 'BIO SCI 35', 'BIO SCI 36', 'BIO SCI 37', 'BIO SCI 38', 'BIO SCI 41', 'BIO SCI 44', 'BIO SCI 45', 'BIO SCI 47', 'BIO SCI 48', 'BIO SCI 55', 'BIO SCI 56', 'BIO SCI 6', 'BIO SCI 70', 'BIO SCI 75', 'BIO SCI 8', 'BIO SCI 93', 'BIO SCI 93L', 'BIO SCI 94', 'BIO SCI 94L', 'BIO SCI 9A', 'BIO SCI 9B', 'BIO SCI 9E', 'BIO SCI 9J', 'BIO SCI 9K', 'BIO SCI H90', 'BIO SCI H93', 'BIO SCI H94', 'BIO SCI N118', 'BME 3', 'CHEM 12', 'CHEM 14', 'CHEM 1A', 'CHEM 1B', 'CHEM 1C', 'CHEM H2A', 'CHEM H2B', 'CHEM H2C', 'CHEM H90', 'CHEM M2A', 'CHEM M2B', 'CHEM M2C', 'CHEM M3C', 'DANCE 3', 'EARTHSS 1', 'EARTHSS 15', 'EARTHSS 17', 'EARTHSS 19', 'EARTHSS 21', 'EARTHSS 23', 'EARTHSS 3', 'EARTHSS 40A', 'EARTHSS 40B', 'EARTHSS 40C', 'EARTHSS 5', 'EARTHSS 7', 'ECON 11', 'ENGR 1A', 'GDIM 25', 'HISTORY 60', 'I&C SCI 10', 'I&C SCI 11', 'I&C SCI 31', 'I&C SCI 32', 'I&C SCI 32A', 'I&C SCI 33', 'I&C SCI 4', 'I&C SCI 5', 'I&C SCI 51', 'I&C SCI 61', 'I&C SCI 6N', 'I&C SCI 9', 'IN4MATX 12', 'LPS 29', 'LPS 31', 'LPS 40', 'LPS 60', 'LPS H123', 'LPS H81', 'LPS H91', 'MATH 10', 'MATH 9', 'MED HUM 3', 'NUR SCI 50', 'PHILOS 29', 'PHILOS 3', 'PHILOS 31', 'PHRMSCI H80', 'PHY SCI 9', 'PHYSICS 12', 'PHYSICS 14', 'PHYSICS 15', 'PHYSICS 18', 'PHYSICS 19', 'PHYSICS 20A', 'PHYSICS 20B', 'PHYSICS 20D', 'PHYSICS 20E', 'PHYSICS 21', 'PHYSICS 3A', 'PHYSICS 3B', 'PHYSICS 3C', 'PHYSICS 7C', 'PHYSICS 7D', 'PHYSICS 7E', 'PHYSICS H80', 'PHYSICS H90', 'PSYCH 122P', 'PUBHLTH 2', 'PUBHLTH 30', 'PUBHLTH 60', 'PUBHLTH 80', 'PUBHLTH 90', 'SOC SCI 11A', 'UNI STU H30A', 'UNI STU H30B', 'UNI STU H30F'];
  const optionsGE3 = ['AFAM 40A', 'AFAM 40B', 'AFAM 40C', 'ANTHRO 125C', 'ANTHRO 127', 'ANTHRO 25A', 'ANTHRO 2A', 'ANTHRO 2B', 'ANTHRO 2C', 'ANTHRO 2D', 'ANTHRO 41A', 'ANTHRO 45A', 'ANTHRO 48', 'ANTHRO 60', 'ART 12C', 'ASIANAM 130', 'ASIANAM 50', 'ASIANAM 51', 'ASIANAM 52', 'ASIANAM 53', 'BIO SCI 48', 'CHC/LAT 164A', 'CHC/LAT 61', 'CHC/LAT 62', 'CHC/LAT 63', 'CHC/LAT 64', 'CRM/LAW C10', 'CRM/LAW C183', 'CRM/LAW C187', 'CRM/LAW C7', 'CRM/LAW H80', 'ECON 1', 'ECON 11', 'ECON 13', 'ECON 17', 'ECON 20A', 'ECON 20B', 'ECON 23', 'EDUC 10', 'EDUC 25', 'EDUC 30', 'EDUC 40', 'EDUC 55', 'ENGLISH 11', 'ENGLISH 11C', 'ENGLISH H80', 'ENGLISH H81', 'ENGRCEE 40', 'ENGRCEE 60', 'EURO ST 10', 'EURO ST 11', 'EURO ST 12', 'EURO ST S10', 'EURO ST S11', 'GDIM 41', 'GEN&SEX 60A', 'GEN&SEX 60B', 'GEN&SEX 60C', 'GLBL ME 60B', 'GLBL ME 60C', 'HISTORY 11', 'HISTORY 15C', 'HISTORY 15F', 'HUMAN H81', 'HUMAN H83', 'I&C SCI 11', 'I&C SCI 3', 'I&C SCI 60', 'IN4MATX 12', 'IN4MATX H81', 'INTL ST 1', 'INTL ST 11', 'INTL ST 12', 'INTL ST 13', 'INTL ST 14', 'INTL ST 15', 'INTL ST 16', 'INTL ST 17', 'LPS 91', 'LPS H125', 'LPS H91', 'LPS H95', 'LSCI 10', 'LSCI 20', 'LSCI 3', 'LSCI 51', 'LSCI 68', 'MED HUM 1', 'MGMT 4A', 'MGMT 4B', 'PHILOS 22', 'PHILOS 91', 'POL SCI 11A', 'POL SCI 11C', 'POL SCI 21A', 'POL SCI 31A', 'POL SCI 41A', 'POL SCI 44B', 'POL SCI 45A', 'POL SCI 51A', 'POL SCI 61A', 'POL SCI 71A', 'PSCI 11A', 'PSCI 11B', 'PSCI 11C', 'PSCI 9', 'PSYCH 21A', 'PSYCH 46A', 'PSYCH 56L', 'PSYCH 78A', 'PSYCH 7A', 'PSYCH 9A', 'PSYCH 9B', 'PSYCH 9C', 'PUBHLTH 1', 'REL STD 17', 'REL STD 60', 'REL STD 61', 'SOC SCI 11A', 'SOC SCI 12', 'SOC SCI 133', 'SOC SCI 15', 'SOC SCI 16', 'SOC SCI 17', 'SOC SCI 1A', 'SOC SCI 2A', 'SOC SCI 40', 'SOC SCI 4A', 'SOC SCI 5A', 'SOC SCI 5D', 'SOC SCI 70C', 'SOC SCI 78A', 'SOC SCI 78B', 'SOC SCI 78C', 'SOC SCI H1E', 'SOC SCI H1F', 'SOC SCI H1G', 'SOCECOL 1', 'SOCECOL H20A', 'SOCECOL H20B', 'SOCECOL H20C', 'SOCIOL 1', 'SOCIOL 177C', 'SOCIOL 2', 'SOCIOL 3', 'SOCIOL 31', 'SOCIOL 62', 'SPPS 40', 'UNI STU 85A', 'UNI STU 85B', 'UNI STU 85C', 'UNI STU H30C', 'UNI STU H30D', 'UNI STU H30E', 'UNI STU H80', 'UPPP 142', 'UPPP 166', 'UPPP 4', 'UPPP 5', 'UPPP 8']
  const optionsGE4 = ['AFAM 40A', 'AFAM 40B', 'AFAM 40C', 'ARABIC 51', 'ART 12A', 'ART 12B', 'ART 1A', 'ART 1B', 'ART 1C', 'ART 8', 'ART 9A', 'ART 9B', 'ART 9C', 'ART HIS 30', 'ART HIS 40A', 'ART HIS 40B', 'ART HIS 40C', 'ART HIS 42A', 'ART HIS 42B', 'ART HIS 42C', 'ART HIS 42D', 'ART HIS 42E', 'ART HIS 42F', 'ART HIS 44', 'ART HIS 55', 'ARTS 1', 'ARTS H81', 'ASIANAM 50', 'ASIANAM 51', 'ASIANAM 54', 'ASIANAM 55', 'CLASSIC 36A', 'CLASSIC 36B', 'CLASSIC 36C', 'CLASSIC 37A', 'CLASSIC 37B', 'CLASSIC 37C', 'CLASSIC 45A', 'CLASSIC 45B', 'CLASSIC 45C', 'COM LIT 10', 'COM LIT 3', 'COM LIT 60A', 'COM LIT 60B', 'COM LIT 60C', 'COM LIT 8', 'COM LIT 9', 'DANCE 80', 'DANCE 81', 'DANCE 90A', 'DANCE 90B', 'DANCE 90C', 'DRAMA 10', 'DRAMA 11', 'DRAMA 12', 'DRAMA 13', 'DRAMA 15', 'DRAMA 16', 'DRAMA 20A', 'DRAMA 20B', 'DRAMA 20C', 'DRAMA 22', 'DRAMA 40A', 'DRAMA 40B', 'DRAMA 40C', 'EAS 20', 'EAS 40', 'EAS 55', 'EAS H84', 'ENGLISH 10', 'ENGLISH 10B', 'ENGLISH 11', 'ENGLISH 11C', 'ENGLISH 12', 'ENGLISH 16', 'ENGLISH 17', 'ENGLISH 8', 'ENGLISH 9', 'ENGLISH H80', 'EURO ST 10', 'EURO ST 11', 'EURO ST 12', 'EURO ST 13', 'EURO ST 9', 'EURO ST S10', 'EURO ST S11', 'FLM&MDA 85A', 'FLM&MDA 85B', 'FLM&MDA 85C', 'FLM&MDA H80', 'FRENCH 50', 'GEN&SEX 20', 'GEN&SEX 50A', 'GEN&SEX 50B', 'GEN&SEX 50C', 'GLBL ME 60A', 'HEBREW 50', 'HISTORY 10', 'HISTORY 12', 'HISTORY 15A', 'HISTORY 15C', 'HISTORY 15D', 'HISTORY 15F', 'HISTORY 16A', 'HISTORY 16B', 'HISTORY 16C', 'HISTORY 18A', 'HISTORY 21A', 'HISTORY 21B', 'HISTORY 21C', 'HISTORY 36A', 'HISTORY 36B', 'HISTORY 36C', 'HISTORY 37A', 'HISTORY 37B', 'HISTORY 37C', 'HISTORY 40A', 'HISTORY 40B', 'HISTORY 40C', 'HISTORY 5', 'HISTORY 50', 'HISTORY 60', 'HISTORY 70A', 'HISTORY 70B', 'HISTORY 70C', 'HISTORY 70D', 'HISTORY 70E', 'HISTORY 70F', 'HUMAN 10', 'HUMAN 1A', 'HUMAN 1B', 'HUMAN 1C', 'HUMAN B1A', 'HUMAN H80', 'HUMAN H81', 'HUMAN H84', 'ITALIAN 50', 'LIT JRN 20', 'LPS 60', 'MED HUM 1', 'MED HUM 3', 'MUSIC 25', 'MUSIC 3', 'MUSIC 4', 'MUSIC 40B', 'MUSIC 40C', 'MUSIC 40D', 'MUSIC 41', 'MUSIC 42', 'MUSIC 44', 'MUSIC 45', 'MUSIC 46', 'MUSIC 47', 'MUSIC 48', 'MUSIC 5', 'MUSIC 51', 'MUSIC 78', 'MUSIC 8', 'MUSIC 9', 'MUSIC H80', 'PERSIAN 50', 'PHILOS 1', 'PHILOS 10', 'PHILOS 12', 'PHILOS 13', 'PHILOS 2', 'PHILOS 21', 'PHILOS 4', 'PHILOS 5', 'PHILOS 7', 'REL STD 21', 'REL STD 5A', 'REL STD 5B', 'REL STD 5C', 'RUSSIAN 50', 'SOC SCI 78A', 'SPANISH 50', 'SPANISH 60E', 'SPANISH 60S', 'SPANISH 61', 'VIETMSE 50']
  const optionsGE5a = ['ANTHRO 10A', 'ANTHRO 10B', 'BME 3', 'CHEM 12', 'CHEM 14', 'CHEM 1A', 'CHEM 1B', 'CHEM 1C', 'CHEM H2A', 'CHEM H2B', 'CHEM H2C', 'CHEM H90', 'CHEM M2A', 'CHEM M2B', 'CHEM M2C', 'CHEM M3C', 'COGS 10A', 'COGS 10B', 'EARTHSS 1', 'EARTHSS 15', 'EARTHSS 17', 'EARTHSS 21', 'EARTHSS 23', 'EARTHSS 3', 'EARTHSS 40A', 'EARTHSS 40C', 'EARTHSS 5', 'EARTHSS 7', 'ECON 15A', 'ECON 15B', 'EDUC 15', 'GDIM 31', 'GDIM 32', 'I&C SCI 32', 'I&C SCI 32A', 'I&C SCI 7', 'I&C SCI 9', 'LPS 31', 'MGMT 7', 'PHILOS 31', 'PHY SCI 9', 'PHYSICS 12', 'PHYSICS 14', 'PHYSICS 20A', 'PHYSICS 20B', 'PHYSICS 20D', 'PHYSICS 20E', 'PHYSICS 3A', 'PHYSICS 3B', 'PHYSICS 3C', 'PHYSICS 7C', 'PHYSICS 7D', 'PHYSICS 7E', 'PHYSICS H90', 'PSYCH 10A', 'PSYCH 10B', 'PUBHLTH 7A', 'PUBHLTH 7B', 'SOC SCI 10A', 'SOC SCI 10B', 'SOCECOL 13', 'SOCIOL 10A', 'SOCIOL 10B', 'STATS 67', 'STATS 7', 'STATS 8', 'UNI STU H30A']
  const optionsGE5b = ['ANTHRO 10C', 'COGS 10C', 'EARTHSS 19', 'EURO ST 12', 'I&C SCI 31', 'I&C SCI 32', 'I&C SCI 32A', 'I&C SCI 33', 'I&C SCI 46', 'I&C SCI 6B', 'I&C SCI 6D', 'I&C SCI 6N', 'I&C SCI 9', 'LPS 29', 'LPS 30', 'LSCI 10', 'LSCI 20', 'LSCI 3', 'LSCI 43', 'MATH 10', 'MATH 2A', 'MATH 2B', 'MATH 2D', 'MATH 3A', 'MATH 5A', 'MATH 5B', 'MATH 7A', 'MATH 7B', 'MATH 9', 'MATH H2D', 'PHILOS 2', 'PHILOS 29', 'PHILOS 30', 'PHY SCI 9', 'PSYCH 10C', 'SOC SCI 10C', 'SOCIOL 10C', 'STATS 6', 'UNI STU H30B']
  const optionsGE6 = ['ARABIC 1A', 'ARABIC 1B', 'ARABIC 1C', 'ARMN 1A', 'ARMN 1B', 'ARMN 1C', 'CHINESE 1A', 'CHINESE 1B', 'CHINESE 1C', 'FRENCH 1A', 'FRENCH 1B', 'FRENCH 1C', 'GERMAN 1A', 'GERMAN 1B', 'GERMAN 1C', 'GREEK 1A', 'GREEK 1B', 'GREEK 1C', 'ITALIAN 1A', 'ITALIAN 1B', 'ITALIAN 1C', 'JAPANSE 1A', 'JAPANSE 1B', 'JAPANSE 1C', 'KOREAN 1A', 'KOREAN 1B', 'KOREAN 1C', 'LATIN 1A', 'LATIN 1B', 'LATIN 1C', 'PERSIAN 1A','PERSIAN 1B','PERSIAN 1C', 'RUSSIAN 1A', 'RUSSIAN 1B', 'RUSSIAN 1C', 'SPANISH 1A', 'SPANISH 1B', 'SPANISH 1C', 'VIETMSE 1A', 'VIETMSE 1B', 'VIETMSE 1C']
  const optionsGE7 = ['AFAM 40A', 'AFAM 40B', 'AFAM 40C', 'ANTHRO 121D', 'ANTHRO 128B', 'ANTHRO 136K', 'ANTHRO 162B', 'ANTHRO 25A', 'ANTHRO 60', 'ART HIS 44', 'ASIANAM 130', 'ASIANAM 144', 'ASIANAM 50', 'ASIANAM 52', 'ASIANAM 53', 'ASIANAM 54', 'ASIANAM 55', 'CHC/LAT 151', 'CHC/LAT 154', 'CHC/LAT 158', 'CHC/LAT 158B', 'CHC/LAT 163', 'CHC/LAT 164A', 'CHC/LAT 167', 'CHC/LAT 168', 'CHC/LAT 176', 'CHC/LAT 178', 'CHC/LAT 183', 'CHC/LAT 61', 'CHC/LAT 62', 'CHC/LAT 63', 'CHC/LAT 64', 'CHC/LAT 65', 'COM LIT 9', 'CRM/LAW C187', 'DRAMA 13', 'EDUC 124', 'EDUC 143BW', 'ENGLISH 8', 'FLM&MDA H80', 'GEN&SEX 172', 'GEN&SEX 20', 'GEN&SEX 50A', 'GEN&SEX 50B', 'GEN&SEX 50C', 'HISTORY 149', 'HISTORY 15A', 'HISTORY 15C', 'HISTORY 15D', 'HISTORY 15F', 'HISTORY 15G', 'HUMAN 1C', 'LSCI 2', 'MUSIC 78', 'POL SCI 124A', 'POL SCI 124B', 'POL SCI 126C', 'POL SCI 32A', 'POL SCI 61A', 'PSCI 192Q', 'PSCI 192S', 'REL STD 60', 'SOC SCI 132', 'SOC SCI 173L', 'SOC SCI 70C', 'SOC SCI 78A', 'SOC SCI 78B', 'SOC SCI 78C', 'SOCIOL 1', 'SOCIOL 163', 'SOCIOL 177C', 'SOCIOL 3', 'SOCIOL 51', 'SOCIOL 63', 'SOCIOL 64', 'SOCIOL 68A', 'SPANISH 3H', 'SPANISH 62', 'SPPS 70A', 'UPPP 172']
  const optionsGE8 = ['ANTHRO 125X', 'ANTHRO 134A', 'ANTHRO 136A', 'ANTHRO 136D', 'ANTHRO 162A', 'ANTHRO 163A', 'ANTHRO 164P', 'ANTHRO 20A', 'ANTHRO 2A', 'ANTHRO 30A', 'ANTHRO 41A', 'ANTHRO 48', 'ANTHRO 60', 'ARABIC 2A', 'ARABIC 2B', 'ARABIC 2C', 'ARABIC 51', 'ARMN 2A', 'ARMN 2B', 'ARMN 2C', 'ART HIS 30', 'ART HIS 40A', 'ART HIS 40B', 'ART HIS 40C', 'ART HIS 42A', 'ART HIS 42B', 'ART HIS 42C', 'ART HIS 42D', 'ART HIS 42E', 'ART HIS 42F', 'ASIANAM 51', 'CHC/LAT 120', 'CHC/LAT 161', 'CHC/LAT 178A', 'CHINESE 2A', 'CHINESE 2B', 'CHINESE 2C', 'CHINESE 3A', 'CHINESE 3B', 'CHINESE 3C', 'CHINESE 40', 'COM LIT 10', 'COM LIT 3', 'COM LIT 60A', 'COM LIT 60B', 'COM LIT 60C', 'DANCE 80', 'DANCE 90A', 'DANCE 90B', 'DRAMA 13', 'DRAMA 40A', 'DRAMA 40B', 'DRAMA 40C', 'EARTHSS 15', 'EARTHSS 17', 'EARTHSS 21', 'EARTHSS 23', 'EAS 20', 'EAS 40', 'EAS 55', 'ECON 13', 'EURO ST 10', 'EURO ST 11', 'EURO ST 13', 'EURO ST 9', 'EURO ST S10', 'EURO ST S11', 'FRENCH 2A', 'FRENCH 2AB', 'FRENCH 2B', 'FRENCH 2BC', 'FRENCH 2C', 'FRENCH 50', 'FRENCH S2AB', 'FRENCH S2BC', 'GEN&SEX 60C', 'GERMAN 2A', 'GERMAN 2B', 'GERMAN 2C', 'GLBL ME 60A', 'GLBL ME 60B', 'GLBL ME 60C', 'HEBREW 50', 'HISTORY 10', 'HISTORY 11', 'HISTORY 16A', 'HISTORY 16B', 'HISTORY 16C', 'HISTORY 18A', 'HISTORY 21A', 'HISTORY 21B', 'HISTORY 21C', 'HISTORY 50', 'HISTORY 70A', 'HISTORY 70B', 'HISTORY 70D', 'HISTORY 70E', 'HISTORY 70F', 'HUMAN 10', 'HUMAN 1C', 'INTL ST 1', 'INTL ST 11', 'INTL ST 12', 'INTL ST 122', 'INTL ST 13', 'INTL ST 14', 'INTL ST 145A', 'INTL ST 15', 'INTL ST 158B', 'INTL ST 16', 'INTL ST 162B', 'INTL ST 17', 'INTL ST 183E', 'ITALIAN 2A', 'ITALIAN 2B', 'ITALIAN 2C', 'ITALIAN 50', 'JAPANSE 2A', 'JAPANSE 2B', 'JAPANSE 2C', 'JAPANSE 3A', 'JAPANSE 3B', 'JAPANSE 3C', 'JAPANSE S2AB', 'JAPANSE S2BC', 'KOREAN 2A', 'KOREAN 2B', 'KOREAN 2C', 'KOREAN 2KB', 'KOREAN 2KC', 'KOREAN 3A', 'KOREAN 3B', 'KOREAN 3C', 'LSCI 1', 'MGMT 111', 'MGMT 128', 'MUSIC 40B', 'MUSIC 40C', 'MUSIC 40D', 'MUSIC 42', 'MUSIC 44', 'PERSIAN 2A', 'PERSIAN 2B', 'PERSIAN 2C', 'PERSIAN 50', 'POL SCI 11A', 'POL SCI 141B', 'POL SCI 141C', 'POL SCI 147E', 'POL SCI 154F', 'POL SCI 154G', 'POL SCI 172A', 'POL SCI 41A', 'POL SCI 44B', 'POL SCI 45A', 'POL SCI 51A', 'PUBHLTH 168', 'PUBHLTH 170', 'PUBHLTH 174', 'REL STD 5A', 'REL STD 5B', 'REL STD 5C', 'REL STD 60', 'REL STD 61', 'RUSSIAN 2A', 'RUSSIAN 2B', 'RUSSIAN 2C', 'RUSSIAN 50', 'SOC SCI 12', 'SOC SCI 15', 'SOC SCI 16', 'SOC SCI 17', 'SOC SCI 183E', 'SOC SCI 4A', 'SOC SCI 5D', 'SOCECOL E127', 'SOCIOL 2', 'SOCIOL 44', 'SPANISH 2A', 'SPANISH 2B', 'SPANISH 2C', 'SPANISH 3', 'SPANISH 50', 'SPANISH 60E', 'SPANISH 60S', 'SPANISH 61', 'SPANISH S2AB', 'SPANISH S2BC', 'SPPS 102', 'VIETMSE 2A', 'VIETMSE 2B', 'VIETMSE 2C']
  const optionsICS30 = ["I&C SCI 31","I&C SCI 32","I&C SCI 32A","I&C SCI 33"]
  const  optionsMajorElective = ['IN4MATX 102', 'IN4MATX 125', 'IN4MATX 132', 'IN4MATX 133', 'IN4MATX 134', 'IN4MATX 141', 'IN4MATX 143', 'IN4MATX 148', 'IN4MATX 161', 'COMPSCI 133', 'COMPSCI 134', 'COMPSCI 142A', 'COMPSCI 142B', 'COMPSCI 145', 'COMPSCI 146', 'COMPSCI 165', 'I&C SCI 167', 'I&C SCI 168']

  const [yearList, setYearList] = useState([]);
  const [inputYear, setInputYear] = useState('');

  const addYear = (year : any) => {
    if (inputYear)
    {
      let prev : any = [...yearList];
      prev.push(<Yearcard key={Math.random()} year={year}/>)
      setYearList(prev);
      setInputYear('')
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="main-content">
      
          <header className="main-header">
            <h1>UCI Software Engineering Academic Planner</h1>
            <div className="header-buttons">
              <button
                className={activeButton === 'eraser' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('eraser')}
              >
                <img src="assets\images\eraser.png" alt="Eraser" />
              </button>
              <button
                className={activeButton === 'pen' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('pen')}
              >
                <img src="assets\images\pen-nib.svg" alt="Pen" />
              </button>
              <button
                className={activeButton === 'pencil' ? 'active' : ''}
                onClick={() => handleHeaderButtonClick('pencil')}
              >
                <img src="assets/images/pencil.svg" alt="Pencil" />
              </button>
            </div>
          </header>
          
          <div style={{display: "flex", flexDirection: "row", justifyContent: 'flex-end', marginTop: 10}}>
            <div>
              <input
                type="number"
                value={inputYear}
                onChange={(e) => setInputYear(e.target.value)}
                placeholder="Enter year"
                style={{height: 33}}
              />
              <button 
                style={{margin: 0, marginLeft: 10}}
                onClick={() => {addYear(inputYear)}}
              >
                Add A New Year
              </button>
            </div>
          </div>

          {/* Showing All the Year card that stored in list */}
          {/* I think this is a dangrous way to implement, but let's make it as our first step */}
          {yearList.map((yearcard : any) => (yearcard))}
          <p> </p>
          <div className='hidden-spacer'><p>_</p></div>
        </div>
        <div className="sidebar">
          <div className="buttons">
            <button
              className={activeSection === 'GE' ? 'active' : ''}
              onClick={() => setActiveSection('GE')}
            >
              GE
            </button>
            <button
              className={activeSection === 'Major' ? 'active' : ''}
              onClick={() => setActiveSection('Major')}
            >
              Major
            </button>
          </div>
          <div className="section-content">
            {activeSection === 'GE' ? (
              <div>
                <h3>General Education Content</h3>
                <h4>Ia. Lower Division Writing (2)</h4>
                <div className="cards-row">
                  <Card text="Writing 50" />
                  <Card text="Writing 60" />
                </div>
                <h4>Ib. Upper Division Writing (1)</h4>
                <div className="cards-row">
                  <Card text="I&C SCI 139W" />
                </div>
                <h4>II. Science and Technology (3)</h4>
                <ModalButton cards={cardsGE2} setCards={setCardsGE2} cont='options-container' options={optionsGE2}></ModalButton>
                <h4>III. Social and Behavioral Sciences (3)</h4>
                <ModalButton cards={cardsGE3} setCards={setCardsGE3} cont='options-container' options={optionsGE3}></ModalButton>
                <h4>IV. Arts and Humanities (3)</h4>
                <ModalButton cards={cardsGE4} setCards={setCardsGE4} cont='options-container' options={optionsGE4}></ModalButton>
                <h4>V. Quantitative, Symbolic, and Computational Reasoning (3)</h4>
                <p>You are required to take one course in each of the subcategories and an additional course from either subcategory.</p>
                <h4>Va. Quantitative Literacy</h4>
                <ModalButton cards={cardsGE5a} setCards={setCardsGE5a} cont='options-container' options={optionsGE5a}></ModalButton>
                <h4>Vb. Formal Reasoning</h4>
                <ModalButton cards={cardsGE5b} setCards={setCardsGE5b} cont='options-container' options={optionsGE5b}></ModalButton>
                <h4>VI. Language Other Than English (1)</h4>
                <p>Students must finish coursework equivalent to a third quarter of study in a language.</p>
                <ModalButton cards={cardsGE6} setCards={setCardsGE6} cont='options-container-6' options={optionsGE6}></ModalButton>
                <h4>VII. Multicultural Studies (1)</h4>
                <ModalButton cards={cardsGE7} setCards={setCardsGE7} cont='options-container' options={optionsGE7}></ModalButton>
                <h4>VIII. International/Global Issues (1)</h4>
                <ModalButton cards={cardsGE8} setCards={setCardsGE8} cont='options-container' options={optionsGE8}></ModalButton>
                <p> </p>
                <p>_</p>
              </div>
            ) : (
              <div>
                <h3>Major Content</h3>
                <h4>Complete I&C SCI 30 Series</h4>
                <ModalButton cards={cardsMajor30} setCards={setCardsMajor30} cont='options-container-4' options={optionsICS30}></ModalButton>
                <h4>Complete Lower Division Core</h4>
                <div className="cards-row">
                  <Card text='I&C SCI 45C'/>
                  <Card text="I&C SCI 45J" />
                  <Card text="I&C SCI 46" />
                  <Card text="I&C SCI 51" />
                  <Card text="IN4MATX 43" />
                  <Card text="MATH 2A" />
                  <Card text="MATH 2B" />
                  <Card text="I&C SCI 6B" />
                  <Card text="I&C SCI 6D" />
                  <Card text="I&C SCI 6N" />
                  <Card text="STATS 67" />
                </div>
                <h4>Upper Division Core</h4>
                <div className="cards-row">
                  <Card text="COMPSCI 122A" />
                  <Card text="COMPSCI 143A" />
                  <Card text="COMPSCI 161" />
                  <Card text="IN4MATX 113" />
                  <Card text="IN4MATX 115"/>
                  <Card text="IN4MATX 121"/>
                  <Card text="IN4MATX 122"/>
                  <Card text="IN4MATX 124"/>
                  <Card text="IN4MATX 131"/>
                  <Card text="IN4MATX 151"/>
                  <Card text="IN4MATX 191A"/>
                  <Card text="IN4MATX 191B"/>
                  <Card text="I&C SCI 139W"/>
                </div>
                <h4>Upper Division Electives (4)</h4>
                <ModalButton cards={cardsMajorElective} setCards={setCardsMajorElective} cont='options-container-4' options={optionsMajorElective}></ModalButton>
                <p> </p>
                <p>_ </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
