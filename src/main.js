const http=require('http')
const server=http.createServer((request,response)=>{
    response.write('wow')
    response.end()
})
server.listen(3000,()=>{
    console.log('http://localhost:3000');
})
