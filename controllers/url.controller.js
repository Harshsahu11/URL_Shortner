const { nanoid } = require('nanoid');
const URL = require("../models/url.model");

async function handleGenerateNewShortId(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            message: "URL is required"
        });
    }

    try {
        const shortID = nanoid(8);

        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });

        return res.render('home',{
            id: shortID
        });       

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

async function handleShortID(req,res){
    const shortId = req.params.shortId;
    const Entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timestamp : Date.now()
        },
    }});
    
    res.redirect(Entry.redirectURL);

    
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({ totalClicks:result.visitHistory.length,
        analytics : result.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortId,
    handleShortID,
    handleGetAnalytics
};