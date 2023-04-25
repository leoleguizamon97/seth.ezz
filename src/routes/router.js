//** Archivo router **//
const express   = require('express');
const router    = express.Router();

//Importa la coneccion con la BD
const conexion = require('../database/db');

//Permite utilizar dicho elemento en otras partes de la aplicacion
module.exports = router;

/*Codigo con peticiones asincronas usar :
router.get('/',async (req,res) => {
    await TextTrackList.find()
})
 */