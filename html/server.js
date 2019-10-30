const express = require('express');

const app= express();

app.use('/assets',express.static('assets'));//agregano la nueva ruta

app.get('/',function(req,res){
  res.sendFile('index.html',{
    //aqui busca automaticamente la direccion donde se alojan
    root: __dirname
  });
})

app.listen(3000);
