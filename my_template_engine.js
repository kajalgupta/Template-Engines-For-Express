var express = require('express');
var app = express();

var fs = require('fs');

app.engine('kajal', function (filepath, options, callback){
    fs.readFile("C://Users/KAJAL/Desktop/NODE/myExpressApp/views/index.kajal", function (err, content){
        
        if(err) return callback(err)
    //A simple template engine
        var rendered = content.toString()
         .replace('#title#', '<title>' + options.title + '</title>')
         .replace('#message#', '<h1>' + options.message + '</h1>')
          return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'kajal')

app.get('/', function (req, res) {
    res.render('index', { title: 'HEY' , message: 'HELLO' })
})
 app.listen(1008);