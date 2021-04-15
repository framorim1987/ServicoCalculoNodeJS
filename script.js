var http = require('http');
var url = require('url');
var calc = require('./calculadora.js');

//criando um objeto do tipo servidor
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta
    var txt = calc(q.operacao, q.num1, q.num2)
    res.end(txt); //imprime o texto na tela
}).listen(4000); //porta de conexão