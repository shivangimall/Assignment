const express = require("express");

const router = express.Router();

const {transactions, statistics, barchart, piechart}  = require("../controllers/data.controller")

router.get('/transactions',transactions)
router.get('/statistics',statistics);
router.get('/barchart',barchart);
router.get('/piechart',piechart)

module.exports = router;