const http =require("http")
// const {Sever}= require("socket.io")
const app =require("./src/config/express.config")
const server= http.createServer(app);
// const io = new Server(server,{
//     cors:"*"
// })
// io.on("", (socket) => {
//     console.log("Scoket Connected ......", socket)
// })


server.listen(9008, '127.0.0.1', (err)=>{
    if (!err){
        console.log("server is running")
        console.log("click cntrl + c to disconnect")
    }
})