const { request } = require("express");

const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log('🚀服务已启动');
})

// const http = require('http')
// const server = http.createServer((request, response) => {
//     const data = {
//         id: 1,
//         title: '关山月',
//         content: '明月出天山，苍茫云海间'
//     }
//     const jsonData = JSON.stringify(data);
//     response.writeHead(200, {
//         'Content-Type': 'application/json; charset=utf-8',
//     })
//     response.write(jsonData)
//     response.end();
// })
// server.listen(3000, () => {
//     console.log('http://localhost:3000');
// })
