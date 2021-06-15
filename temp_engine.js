const express = require('express');
const app = express();
const pug = require('pug');

//COMPILE THE SOURCE CODE

const compiledFunction = pug.compileFile('template.pug');

app.set('view engine', 'pug')
app.get('/', function(req, res) {
    res.render('index', { title: 'Hey' , message: 'Hello there!'})
})

console.log(compiledFunction({
    name : 'KAJAL'
}));

console.log(compiledFunction({
    name: 'heya'
}));

console.log(pug.gender('template.pug' , {
    name : 'BELLA'
}));

app.listen(1099);

