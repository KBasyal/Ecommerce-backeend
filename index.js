const http =require("http")
const server= http.createServer();// server applicaation
// 0-65535
//~100 ports are already usedor reserved
server.listen(9005, '127.0.0.1', (err)=>{
    if (!err){
        console.log("server is running")
        console.log("click cntrl + c to disconnect")
    }
})