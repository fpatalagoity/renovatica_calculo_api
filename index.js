const express = require("express");
const app = express();
var variables={
	metros_cuadrados:100,
	ahorro_energetico:7000,
	ahorro_monetario:''
};
var resultado='';
var respuesta={
	mensaje:'',
	valor:''
}
app.post('/', function (req, res) {
	respuesta.valor= variables.metros_cuadrados + variables.ahorro_energetico;
	respuesta.mensaje="El calculo fue de: " + respuesta.valor;
	res.send(respuesta);
});
app.get('/hola', function (req, res) {
  res.send('[GET]Saludos desde express');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

