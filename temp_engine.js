const express = require('express');
const app = express();
const pug = require('pug');

//COMPILE THE SOURCE CODE Properly

console.log(compiledFunction({
    name : 'KAJAL'
}));

console.log(compiledFunction({
    name: 'NAINA'
}));

console.log(pug.renderFile('template.pug' , {
    name : 'BELLA'
}));

app.listen(1099);

