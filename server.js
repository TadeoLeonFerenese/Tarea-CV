// // Declaramos el protoclo

// let http = require("http");
// let fs = require("fs"); //fs = file system

// //Creamos el servidor
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   //fs.createReadStream("index.html").pipe(res);
//   //fs.createReadStream("styles.css").pipe(res);
//   app.use(express.static(__dirname + "./public"));
// });

// //servir el cotnenido
// server.listen(process.env.PORT || 8020); //Un fernet picante

//Forma trambolika

// const express = require("express");
// const app = express();
// const port = 3090;
// // const path = require("path");
// const fs = require("fs");

// //Config el middleware
// // app.use(express.static(__dirname + "public"));

// //crear el sv

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   res.writeHead(200, { "content-type": "text/html" });
//   app.use(express.static(__dirname + "./public"));
//   //   res.sendFile(path.join(__dirname + "/public"));
// });

// //  app.listen(9013, () => console.log(error));

// app.listen(port, function (error) {
//   if (error) {
//     console.log("le pifiaste rey", error);
//   } else {
//     console.log("", port);
//   }
// });
//----------------------------------------------------------------//

// forma Facil

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, (error) => console.log(`server on ${PORT}`, error));
