/*
 * @Date: 2024-04-13 17:39:26
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-13 17:40:39
 * @FilePath: \26-Express搭建本地服务器\index.js
 */
var express = require('express');
var app = express();

// 设置请求头
app.all('*', function (req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header('"Access-Control-Allow-Credentials", true');
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});

// 配置端口，引入文件
app.use("/clinicMedicalRecord", (req, res) => {
    res.json(clinicMedicalRecord);
});


app.listen(3000, () => {
    console.log("api-server is ready on port 3000")
})

const clinicMedicalRecord = {
  "patientDetail": {
      "name": "郭俊明",
      "sex": "女",
      "age": null,
      "patientId": "123456777",
      "patientDepar": "心内门诊",
      "patientDate": "2021-01-28",
      "patientSpringWaterNum":'65465456465',
      "mainSuit":"主诉0000",
      "nowHistory": "现病史111",
      "pastHistory": "既往史2222",
      "familyIll": "家族史3333",
      "individual": "个人史44444",
      "obstericalHistory": "婚孕史55555",
      "menses": "月经史66666",
      "checkBody": "体格检查77777",
      "adcive": "医生嘱托8888"
  }
}

