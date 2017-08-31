const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '742210203@qq.com',//发送者邮箱
        pass: 'hqqmryrzveigbfej' //授权码,通过QQ获取
    }
});

const mailOptions = {
    from: '742210203@qq.com', // 发送者
    to: 'hs951013@163.com', // 接受者,可以同时发送多个,以逗号隔开
    cc: ',17868804701@163.com',//抄送
    subject: '发送邮件测试', // 标题
    text: 'Hello world', // 文本
    html: `<h2>NodeJS发送邮件测试</h2>`
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`发送成功：${info.accepted}`);
});