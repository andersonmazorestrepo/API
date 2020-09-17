const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/',(req,res) => {
  res.send('Mi Primera Clase Backend');
});

router.get('/Saludo',(req,res) => {
  res.send('Bienvenido Steven');
});

module.exports = router;
