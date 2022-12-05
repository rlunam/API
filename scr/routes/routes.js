const {Router} = require('express');
const {bienvenida, dbconection}  = require('../controllers/controllers');

const router = Router();

router.get('/', bienvenida);

router.get('/dbconection', dbconection);

module.exports = router;