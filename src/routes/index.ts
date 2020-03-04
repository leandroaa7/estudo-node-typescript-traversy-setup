/* var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
 */

import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.render('index',{ title: 'Express' })
})

export default router;