//common js modules, ES2015 modules import express from 'express';
const express = require ('express');
const app = express();

app.get('/', (req, res)=> {
  res.send({Hi: 'Hi There, Say Hello'});
});
const PORT = process.env.PORT || 5000;
//app.listen(PORT);

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
