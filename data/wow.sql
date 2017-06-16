SET NAMES UTF8;
DROP DATABASE IF EXISTS wow;
CREATE DATABASE wow CHARSET=UTF8;
USE wow;
CREATE table wow_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32),
  mailAddr VARCHAR(32),
  upwd VARCHAR(16),
	safeVal int,
  safeAsk VARCHAR(32),
  userId BIGINT,
	poolChk VARCHAR(16)
);
INSERT INTO wow_user VALUES(NULL,"何奕材",'344164628@qq.com','hyc083967',50,'翁源',4402290198707250030,'ABCDEF'),
(NULL,"何荣建",'mzlava@163.com','mz876530',50,'梅县',4402290198707250020,'GHIJKL');
SELECT * FROM wow_user;
