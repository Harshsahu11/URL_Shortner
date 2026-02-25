const express = require('express');
const router = express.Router();
const {handleGenerateNewShortId,handleShortID} = require('../controllers/url.controller');

router.post("/url",handleGenerateNewShortId);

router.get("/:shortId",handleShortID)

module.exports = router;