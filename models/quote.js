const mongoose = require('mongoose');
const config = require('../config/database');

// quote scheme
const QuoteSchema = mongoose.Schema({
    quote: {
        type: String
    }, 
    quoteID:{
        type: Number
    }
});

const Quote = module.exports = mongoose.model('Quote', QuoteSchema);

module.exports.getQuote = function(callback){
    /*
    Quote.findOne({quoteID: 1}, function(err,obj) { 
        //console.log(obj.toObject()); 
        console.log(obj + " this is from the model");
        return obj;
    });
    */

    const query = {quoteID: 1}
    Quote.findOne(query, callback);
    //console.log(callback);
};

module.exports.changeQuote = function(newQuote ,callback){
    Quote.findOne({quoteID: 1}, function(err, quote){
        if(err) throw err;
        quote.quote = newQuote;
        quote.save(callback);
    });
};

module.exports.addQuote = function(newQuote, callback){
    newQuote.save(callback);
}