const express = require('express');
const Canciones = require('./canciones');
const app = express();
const PORT = 3000;
const path = require("path");

app.listen(PORT, () => {
    console.log('App escuchando en el puerto 3000!');
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get("/acerca", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "info.html"));
  });

  ////////MIDDLEWARE GENERAL////
/*app.use((req, res, next) => {
    console.log('middleware server.js');
    next();
  });*/

  ///////ROUTER//////
app.use('/canciones', Canciones);

app.get("/descarga", (req, res) => {
    res.download(
      path.join(__dirname, "public", "images", "Cancion1.jpg"),
      "Cancion1.jpg", 
      (err) => {
        if (err) console.log("Ocurrio un error en la descarga.");
        else console.log("Descarga exitosa.");
      }
    );
  });
  
  app.use((req, res, next) => {
    res.status(404).send('Esa pagina no existe!');
  });