const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();
app.use(express.static('./static'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



console.log("成功运行在localhost:3000")
//登录 name pass
app.post('/login', (req, res) => {
  const body = req.body;
  if (body.name === "" || body.pass == "") {
    var json = {
      isok: false,
      code: -2,
      info: "用户名和账号均不能为空"
    }
    res.send(json)
    return;
  }
  if (body.name == 'admin' && body.pass == '123') {//超管
    var json = {
      isok: true,
      code: 0,
      isAdmin: 0,//用来判断是否是超管，如果是0，是超管，1是普通管理员
      info: "登录成功"
    }
    res.send(json)
    return;
  } else {
    var json = {
      isok: false,
      code: 3,
      info: "账号或者密码错误"
    }
    res.send(json);
    return;
  }
});

//获取首页的数据
app.get('/findDevice', (req, res) => {
  const result = [
    {
      id: "1",
      ip: "10.10.11.12",//ip
      door: "10",//机房
      price: 20,
      status: '0',//0-空闲 1-已出售
    },
    {
      id: "2",
      ip: "10.10.11.13",//ip
      door: "10",//机房
      price: 21,
      status: '0',//0-空闲 1-已出售
    },
    {
      id: "3",
      ip: "10.10.11.14",//ip
      door: "10",//机房
      price: 19,
      status: '1',//0-空闲 1-已出售
    },
  ]
  res.send({
    isok:true,
    data:result
  })
});


app.listen(3000);
