const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, "public", "canciones.html"));
  });
  
  router.post('/', (req, res) => {
    res.send('Respuesta a POST');
  });
  
  router.put('/', (req, res) => {
    res.send('Respuesta a PUT');
  });
  
  router.delete('/', (req, res) => {
    res.send('Respuesta a DELETE');
  });

  router.get("/descarga", (req, res) => {
    res.download(
      path.join(__dirname, "public", "images", "Cancion1.jpg"),
      "Cancion1.jpg", 
      (err) => {
        if (err) console.log("Ocurrio un error en la descarga.");
        else console.log("Descarga exitosa.");
      }
    );
  });


  module.exports = router;