<<<<<<< HEAD
const http =require("http")
const app =require("./src/config/express.config")
const server= http.createServer(app);
//     // header, body , method . url, cookies
//     // console.log(request)
//     const url = request.url;
//     const method = request.method;
//     // const method= require.method;
//     // const file = req.files;
//     // const body = req.body;
//     // const clinet = req.client;
//     // const header = req.headers;

//     response.end("are you still there?")
// });// server applicaation
// 0-65535
//~100 ports are already usedor reserved
server.listen(9008, '127.0.0.1', (err)=>{
    if (!err){
        console.log("server is running")
        console.log("click cntrl + c to disconnect")
    }
=======
const http =require("http")
const app =require("./src/config/express.config")
const server= http.createServer(app);
//     // header, body , method . url, cookies
//     // console.log(request)
//     const url = request.url;
//     const method = request.method;
//     // const method= require.method;
//     // const file = req.files;
//     // const body = req.body;
//     // const clinet = req.client;
//     // const header = req.headers;

//     response.end("are you still there?")
// });// server applicaation
// 0-65535
//~100 ports are already usedor reserved
server.listen(9008, '127.0.0.1', (err)=>{
    if (!err){
        console.log("server is running")
        console.log("click cntrl + c to disconnect")
    }
>>>>>>> origin/main
})