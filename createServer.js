// Declaramos el protocolo y el puerto
const http = require("http");
const port = 5050;

//el port es un numero random que se recomienda ser un numero alto
// Aca vamos a armar el servido

const server = http.createServer(function (req, res) {
  res.write("Hola pewitos malvados");
  res.write("Huracan seguro que empata");
  res.end();
});

// Catchando errores de node

server.listen(port, function (error) {
  if (error) {
    console.log("Tenemos un error y no tenemos idea de que es(?)", error);
  } else {
    console.log("");
  }
});
