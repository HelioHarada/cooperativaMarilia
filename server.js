
// importa configuração do Express e do banco de dados
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express ();
app.use(express.static('dist/spa'));

app.all('/*', function(req, res) {
    console.log(path.resolve('dist/spa/index.html'))
    res.sendFile(path.resolve('dist/spa/index.html'));
});

var port = process.env.PORT || 8082;
// passa a porta definida no Express e levantamento do servidor
app.listen(port);
console.log ('Servidor client iniciado na porta ' + port + '.');
