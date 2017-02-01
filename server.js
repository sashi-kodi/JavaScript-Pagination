var express= require('express');
var bodyparser = require('body-parser');

var app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
var data = require('./employees.json');

app.get('/api/employees', function(req,res){
   res.json(data);
});
app.listen(3000);
console.log('server is listening on port 3000');