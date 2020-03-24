const express = require('express');
const expresslayout = require('express-ejs-layouts');

const bodyparser = require('body-parser');
const port=process.env.port || 3000;
const app = express();

app.set('view engine','ejs');
app.use(expresslayout);
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({encoded : true}));//toma lo que hay en la url, en el body,token


app.get('/',(req,res) => {
    res.render('pages/home',{nombre:'Daniel',edad:'22'});
});

app.get('/about',(req,res) => {
    var users = [
        {
            name:"Parra" , email:"correo@electronico.com"
        },
        {
            name:"Liz" , email:"correo@electronico.com"
        },
        {
            name:"Yanett" , email:"correo@electronico.com"
        },
        {
            name:"Daniel" , email:"correo@electronico.com"
        }
    
        ]
    res.render('pages/about');
});

app.get('/contac',(req,res) => {
   
    res.render('pages/contac');
});

app.post('/contac',(req,res) => {
    
    var nom = req.body.name;
    var email = req.body.email;
    
    console.log('Nombre :' + req.body.name);
    console.log('Email :' + req.body.email);
    console.log(`sujeto:` +req.body.subjet);
    res.render('pages/gracias');
});


app.listen(port,() => (console.log("servidor Activo")));