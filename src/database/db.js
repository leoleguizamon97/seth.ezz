const mysql= require('mysql');

//Datos de la coneccion
const conexion = mysql.createConnection({
	host: 'db.seth-ezz.com',
	user: 'webuser',
	password:'3292',
	database:'seth',
	multipleStatements: true
});
//Conecta con la BD
conexion.connect((error) =>{
	if(error){
		console.error('No se pudo conectar a la BD: '+error);
		return
	}
	console.log('Conectado a la DB');
});
//Se exporta como modulo
module.exports = conexion;