
SET names utf8;
DROP DATABASE IF EXISTS incake;
CREATE DATABASE incake charset = utf8;
USE incake;
/*创建表*/
/*1.商品系列列表*/
CREATE TABLE series(
	sid INT PRIMARY KEY AUTO_INCREMENT,#标识商品系列的ID
	sname CHAR(12) NOT NULL#标识商品系列的名称
);
/*2.用户注册*/
CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,#用户ID
	username CHAR(12)  UNIQUE NOT NULL,#用户名
	password VARCHAR(128) NOT NULL#用户密码
);

/*3.商品详情*/
CREATE TABLE goods(
	gid INT PRIMARY KEY AUTO_INCREMENT,#商品ID
	gname VARCHAR(20) NOT NULL,#商品名
	gdetail VARCHAR(50) NOT NULL,#商品介绍
	gprice DECIMAL(7,2) NOT NULL, #商品价格
	gimg VARCHAR(25) NOT NULL#商品图片
);


/*插入表*/
/*1x.添加商品系列列表*/
INSERT INTO series VALUES
(null,"芝士系列"),
(null,"巧克力系列"),
(null,"拿破仑系列"),
(null,"慕斯系列"),
(null,"乳脂系列"),
(null,"选拼系列");

/*2x.添加用户信息*/
INSERT INTO users VALUES
(null,'abc123','12345678');

/*3x.添加商品详细信息*/
INSERT INTO goods VALUES
(null,'巧克力松露','口感细腻香浓、丝丝浓滑,给你一场味觉盛宴。','198.00','goods1.jpg'),
(null,'奶香巧克力','只留下奶香巧克力化也化不开的醇香。','198.00','goods2.jpg'),
(null,'经典奶香','记忆中的绵密口感，沁着浓郁奶香。','198.00','good3.jpg'),
(null,'卡布基诺','美好在唇齿间化开，那是咖啡迷人的香气。','198.00','good4.jpg'),
(null,'豆之乳','微微的甜与柔，回味还有一股豆奶的香。','198.00','goods5.jpg');


