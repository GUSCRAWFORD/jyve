var express = require('express');
var router = express.Router();

import * as jyve from '@guscrawford.com/jyve-mongo';
import { ODataV4MongoDbGenericRepo } from '@guscrawford.com/jyve-mongo';
// Poop out the result of the export
router.get('/DEBUG', function(req, res, next) {
  res.json(JSON.stringify(jyve));
});
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    var result = await (new ODataV4MongoDbGenericRepo('users')).query();
    res.json(result);
  } catch (x) {
    //next(x);
    console.error(x);
    res.json(x);
  }
  return result;
});

module.exports = router;
