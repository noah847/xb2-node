const { request } = require("express");

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log('🚀服务已启动');
})

app.get('/', (req, res) => {
    res.send('你好')
})

const data = {
    id: 1,
    title: '关山月',
    content: '明月出天山，苍茫云海间'
}
