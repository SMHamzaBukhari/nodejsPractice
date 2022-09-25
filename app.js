// const http = require('http');

// const detail = {
//     name: "Hamza Bukhari",
//     enrollment: "02-131192-022",
//     class: "BSE 6A"
// }

// const detailJSON = JSON.stringify(detail);

// const server = http.createServer((req,res)=>{
//     const query = req.url;
//     // res.setHeader('Content-Type', 'text/html')
//     // res.write('<h1>Hello<h1>');
//     // res.write(`<h3>${query}<h3>`)
//     res.setHeader('Content-Type', 'application/json');
//     res.write(detailJSON);
//     res.end();
// });

// server.listen(3000, ()=>{
//     console.log("listening port");
// });

const express = require("express");
const app = express();
const fromRoutes = require("./routes/form");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next)=>{
    console.log(req.url);
next();
});

app.use("/form",fromRoutes);

app.use("/", (req, res)=>{
    res.send("welcome to express app")
});

app.listen(3000);
