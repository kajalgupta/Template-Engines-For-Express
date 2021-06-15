const express = require('express');
const app = express();
const pug = require('pug');

//COMPILE THE SOURCE CODE Properly

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

