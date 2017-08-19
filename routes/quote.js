const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Quote =  require('../models/quote');

// changeQuote
router.put('/changequote', function(req, res, next){

    let newQuote = new Quote({
        quote: req.body.quote,
        quoteID: 1
    });

    Quote.changeQuote(newQuote.quote, function(err, quote){
        if(err){
            res.json({success: false, msg:'Failed to change quote'});
        } else {
            res.json({success: true, msg:'Quote changed'});
        }
    })
});

// getQuote
router.get('/quote', function(req, res, next){
    let thisQuote = Quote.getQuote(function (err, obj){
        res.json({quote: obj});
    });
    
});

// Post quote
router.post('/postquote', function(req, res, next){
    let quote = new Quote({
        quote: 'New quote',
        quoteID: 1
    });

    Quote.addQuote(quote, function(err, cquote){
        if(err){
            res.json({success: false, msg:'Failed to make quote'});
        } else {
            res.json({success: true, msg:'Quote added'});
        }
    });
});

module.exports = router;