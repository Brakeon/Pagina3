var express = require('express');
var app = express();
var http = require('http'),
    fs = require('fs');

app.get('/', function(req, res) {
    res.send('Hola Mundos!');
    res.redirect("/asdf")

});

app.get('/asdf', function(req, res) {
    res.send('Hola Mundo!');
});

app.get('/users', function(req, res) {
    var user;
    // res.json({ user: 'tobi' });
    res.json({ users: "usuario" }, { usuario: "user" });
    //response.send('user ' + request.params.id);

});

/*app.get('/user/:id', function(req, res) {
    var usuarios = { 1, "Asier" }
    res.send('user ' + req.params.id);
});*/

var pid = [{ "id": 'Pepe', "edad": 23, "ciudad": 'Madrid' }, { "id": 'Ana', "edad": 32, "ciudad": 'Segovia' }, { "id": 'Jose', "edad": 34, "ciudad": 'Valencia' }];

app.get('/edad/:id', function(req, res) {
    var entrada = req.params.id;
    var salida;

    for (var num in pid) {

        //res.send(pid[num] + "\n");
        if (pid[num].id == entrada) {

            salida = pid[num].edad;
        }
    }

    if (salida == null) {
        res.send("no hay na de ná");
    } else {
        res.send('edad: ' + salida);
    }
});

app.get('/ciudad/:id', function(req, res) {
    var entrada = req.params.id;
    var salida;

    for (var num in pid) {

        // res.send(pid[num] + "\n");
        if (pid[num].id == entrada) {

            salida = pid[num].ciudad;
        }
    }

    if (salida == null) {
        res.send("no hay na de ná");
    } else {
        res.send('ciudad: ' + salida);
    }
});

/*app.post('/profile', upload.array(), function(req, res, next) {
    console.log(req.body);
    res.json(req.body);
});*/

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});