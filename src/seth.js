//**Archivo principal del proyecto**//

//Dependencias
const morgan =  require('morgan');
const express = require ('express');
const app = express();

//Configuraciones
app.set('port', 8300); //Esto es como una declaracion de variables -> En app 'port' tiene val de 8300

//Static files (Archivos enviados al front, los envian una vez y es el usuario el que los usa. Algo como un recurso)
app.use(express.static(__dirname + '/public'));

//Middleware (Permite procesar las URL- Acá usa morgan ¿?)
app.use(morgan('dev'));     //Ver solicitudes en consola
app.use(express.json());    //Permite recibir info en este formato

//Routes (Redirige al router)
app.use(require('./routes/router.js'));


//Test
app.listen(app.get('port'),() => {
    console.log('Server corriendo en puerto http://localhost:',app.get('port'), __dirname);
});