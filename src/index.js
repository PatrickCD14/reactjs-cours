/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});

//détermine le port, en dev le port peut être vide donc par défaut 5000
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started');
});