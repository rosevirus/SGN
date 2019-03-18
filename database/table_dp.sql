-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: solideo
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sldo_board`
--

DROP TABLE IF EXISTS `sldo_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sldo_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `postdt` datetime DEFAULT CURRENT_TIMESTAMP,
  `upddt` datetime DEFAULT CURRENT_TIMESTAMP,
  `delyn` varchar(2) COLLATE utf8_bin DEFAULT 'N',
  `viewcnt` int(11) DEFAULT '0',
  `uid` int(11) NOT NULL,
  `grp` int(11) NOT NULL,
  `grpid` int(11) NOT NULL,
  `grpcnt` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sldo_board_sldo_user_idx` (`uid`),
  CONSTRAINT `fk_sldo_board_sldo_user` FOREIGN KEY (`uid`) REFERENCES `sldo_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sldo_board`
--

LOCK TABLES `sldo_board` WRITE;
/*!40000 ALTER TABLE `sldo_board` DISABLE KEYS */;
INSERT INTO `sldo_board` VALUES (1,'테스트용','내용입니다','2019-03-18 11:18:33','2019-03-18 11:18:33','N',0,1,1,0,0),(2,'테스트용답글','답글내용입니다','2019-03-18 11:22:30','2019-03-18 11:22:30','N',0,1,1,1,1),(3,'테스트용2번글','2번글내용','2019-03-18 11:36:31','2019-03-18 11:36:31','N',0,1,2,0,0),(4,'테스트용2번글 답글','2번글 답글내용','2019-03-18 11:39:15','2019-03-18 11:39:15','N',0,1,2,1,1),(5,'테스트용2번글 답글','2번글 답글내용','2019-03-18 11:40:05','2019-03-18 11:40:05','N',0,1,2,1,2),(6,'테스트용 순번 4번글의답글','2번글 답글내용','2019-03-18 11:46:01','2019-03-18 11:46:01','N',0,1,2,2,1),(7,'uid 테스트','uid 테스트내용','2019-03-18 12:25:58','2019-03-18 12:25:58','N',0,2,3,0,0);
/*!40000 ALTER TABLE `sldo_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sldo_notice`
--

DROP TABLE IF EXISTS `sldo_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sldo_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `postdt` datetime DEFAULT CURRENT_TIMESTAMP,
  `upddt` datetime DEFAULT CURRENT_TIMESTAMP,
  `delyn` varchar(2) DEFAULT 'N',
  `uid` int(11) NOT NULL,
  `viewcnt` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_sldo_notice_sldo_user_idx` (`uid`),
  CONSTRAINT `fk_sldo_notice_sldo_user` FOREIGN KEY (`uid`) REFERENCES `sldo_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sldo_notice`
--

LOCK TABLES `sldo_notice` WRITE;
/*!40000 ALTER TABLE `sldo_notice` DISABLE KEYS */;
INSERT INTO `sldo_notice` VALUES (1,'2019.03.17. 저녁예배 찬양인도','2019년 3월 17일 저녁예배 예배인도팀이 솔리데오로 정해졌습니다. 은혜되는 예배 될 수 있게 기도해주세요.','2019-03-14 17:39:44','2019-03-14 17:39:44','N',1,0);
/*!40000 ALTER TABLE `sldo_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sldo_reply`
--

DROP TABLE IF EXISTS `sldo_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sldo_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `postdt` datetime DEFAULT CURRENT_TIMESTAMP,
  `upddt` datetime DEFAULT CURRENT_TIMESTAMP,
  `delyn` varchar(2) COLLATE utf8_bin DEFAULT 'N',
  `bid` int(11) NOT NULL,
  `grp` int(11) NOT NULL,
  `grpid` int(11) NOT NULL,
  `grpcnt` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sldo_reply_sldo_user_idx` (`bid`),
  CONSTRAINT `fk_sldo_reply_sldo_user` FOREIGN KEY (`bid`) REFERENCES `sldo_board` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sldo_reply`
--

LOCK TABLES `sldo_reply` WRITE;
/*!40000 ALTER TABLE `sldo_reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `sldo_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sldo_user`
--

DROP TABLE IF EXISTS `sldo_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sldo_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth` int(11) NOT NULL,
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `signdt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sldo_user`
--

LOCK TABLES `sldo_user` WRITE;
/*!40000 ALTER TABLE `sldo_user` DISABLE KEYS */;
INSERT INTO `sldo_user` VALUES (1,0,'administrator','tiger7777','관리자','adamant_@naver.com','2019-03-14 17:20:45'),(2,1,'gonny','qp7160rk','김경곤','rosevirus.k@gmail.com','2019-03-14 17:22:43'),(3,2,'shhong','immanuel','홍사현','shhong@gmail.com','2019-03-14 17:43:12');
/*!40000 ALTER TABLE `sldo_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18 18:28:09
