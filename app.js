const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// **********小程序需要以下两个************
app.use(bodyParser());
app.use(bodyParser.json());
// ****************************************

app.use(bodyParser.urlencoded({extended: false}));
app.get('/test', (req, res) => {
    console.log("测试接口");
    res.send("你好,这是一个测试接口")
});

app.post('/doRegister', function (req, res) {
    console.log(req.body);
    var username = req.body.username;//获取用户输入的username
    var password = req.body.password;//获取用户输入的password
    if (username == 'admin' && password == '123456') {
        res.send({
            "result": "登陆成功",
            "username":username,
            "password":password,
            "时间":"2017-10-10"
        })
    }
});

app.listen(3000);

