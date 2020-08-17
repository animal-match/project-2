//msql express cors需要预先安装
//引入express模块
const express = require('express');
//创建express实列
const server = express();
//引入cors模块
const cors = require('cors');
//引入body-parser模块
const bodyParser = require('body-parser');
//引入mysql模块
const mysql = require('mysql');
const { resolveSoa } = require('dns');

//创建mysql连接池
const pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	port:3306,
	database:'incake',
	charset:'utf8',
	connectionLimit:15
});

//将cors作为server的中间件
server.use(cors({
	origin:['http://127.0.0.1:8080','http://localhost:8080','http://192.168.101.5:8080']
}));

//将bodyParser作为server中间件使用
server.use(bodyParser.urlencoded({
	extended:false
}));

//获取商品系列的信息接口
server.get('/series',(req,res)=>{	
	//sql查询语句
	let sql="SELECT sid,sname FROM series";
	//执行sql查询语句
	pool.query(sql,(err,results)=>{
		if(err) throw err;
		//console.log(results);
		//响应到客户端的信息
		res.send({message:"查询成功",code:1,results:results});
	});
});
//获取全部商品的接口
server.get('/goods',(req,res)=>{
	//sql查询语句
	let sql="SELECT gid,gname,gdetail,gprice,gimg FROM goods";
	//执行sql查询
	pool.query(sql,(err,results)=>{
		if(err) throw err;
		res.send({message:"Query Success",code:1,results:results});
	});
});
//获取用户注册接口
server.post('/register',(req,res)=>{
	//获取用户提交的用户名等信息
	let username = req.body.username;	
	let sql="SELECT COUNT(id) AS count FROM users WHERE username = ?";
	pool.query(sql,[username],(err,results)=>{
		if(err) throw err;
		if(results[0].count){
			res.send({message:'注册失败',code:0});
		}else{
			//获取密码
			let password = req.body.password;
		
			//写入数据库
			let sql = 'INSERT INTO users(username,password) VALUES(?,?)';
			pool.query(sql,[username,password],(err,results)=>{
				if(err) throw err;
				res.send({message:"注册成功",code:1});
			});
		}
	});
});
//用户登录接口
server.post('/login',(req,res)=>{
	let username = req.body.username;
	let password = req.body.password;
	sql = "SELECT id,username FROM users WHERE username = ? AND password = ?";
	pool.query(sql,[username,password],(err,results)=>{
		if(err) throw err;
		if(results.length == 1){
			//登录成功
			res.send({message:"登录成功",code:1});
		}else{
			//登录失败
			res.send({message:"登录失败",code:0});
		}
	});

});

//指定服务器的监听端口号
server.listen(3000);