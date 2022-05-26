const express =     require('express');
const conectarDB =  require('./config/db');
const cors = require('cors');

//Creamos el servidor
const app = express();

//conectamos la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//Definimos la ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(4000, ()=>{
    console.log('El server está corriendo fino ٩( •ᴗ• )و ')
})