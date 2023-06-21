const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');

//creamos el servidor
const app = express();

// conectamos a la bd
conectarDB();
app.use(cors())

app.use(express.json())
app.use('/api/citas', require('./routes/cita'))



app.listen (4000, () => {
    console.log("EL SERVIDOR ESTÁ CONECTADO")
})