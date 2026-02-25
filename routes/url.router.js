const express = require('express');
const router = express.Router();
const {handleGenerateNewShortId,handleShortID,handleGetAnalytics} = require('../controllers/url.controller');

router.post("/url",handleGenerateNewShortId);

router.get("/:shortId",handleShortID);

router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;