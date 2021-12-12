const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('Jimena Mota Basilio S190022503'));
router.post('/series', controllers.createSerie);
router.get('/series', controllers.getAllseries);
module.exports = router;
