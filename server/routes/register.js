// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel di dalamnya
const registerController = require('../controller').register;
// Definiskan midlleware verify.js
const verifyUser = require('../library/verify');

router.get('/', verifyUser.isLogout, registerController. formRegister);

router.post('/save', verifyUser.isLogout, registerController.saveRegister);

module.exports = router;