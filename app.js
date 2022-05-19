const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000 //puerto

app.get('/', (req, res) => { //parte de rutas, get es un metodo, para slicitar nformacion del servidor ('/')ruta raiz
  res.send('Mi primer servidor!')
})

app.post('/login',(req,res) => {
  let gmail=req.body.gmail;
  let password=req.body.password;
res.send(`su password es: ${password},su gmail es: ${gmail},`);
})



app.post('/register', (req, res) => { //parte de rutas, get es un metodo, para slicitar nformacion del servidor ('/')ruta raiz
 let name=req.body.name;
 let telefono=req.body.telefono;
 let fechaDeNacimiento=req.body.fechaDeNacimiento;
 let password= req.body.password;
 let apellido=req.body.apellido;
 let gmail=req.body.gmail;
 let genero=req.body.genero;


  res.send(`su nombre es: ${name}, su telefono es: ${telefono}, su fecha de nacimiento es: ${fechaDeNacimiento}, su password es: ${password}, su apellido es: ${apellido}, su gmail es: ${gmail}, su genero es: ${genero}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
