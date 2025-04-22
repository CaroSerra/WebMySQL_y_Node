const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Conexión MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'criptomonedas_crypto'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Conectado a la base de datos');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el registro
app.post('/register', (req, res) => {
    const { Nombre, CorreoElectronico, Contraseña } = req.body;
  
    if (!Nombre || !CorreoElectronico || !Contraseña) {
      console.log('❌ Faltan datos');
      return res.status(400).send('Faltan datos');
    }
  
    const sql = 'INSERT INTO Usuarios (Nombre, CorreoElectronico, Contraseña) VALUES (?, ?, ?)';
    db.query(sql, [Nombre, CorreoElectronico, Contraseña], (err, result) => {
      if (err) {
        console.error('❌ Error en la base de datos:', err);
        return res.status(500).send('Error al registrar');
      } else {
        console.log('✅ Usuario registrado correctamente');
        res.redirect('/prices.html');
      }
    });
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
