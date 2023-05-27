const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { type: String, required:[true,"Name is required"]},
    imgUrl: { type: String, required:[true,"Image is required"] },
    position: { type: String},
    chestsNr: {type: Number, required:[true,"Number is required"]},
    phrase: { type: String, required:[true,"Phrase is required"]},
    pegLeg: {type: Boolean},
    eyePatch: {type: Boolean},
    hookHand: {type: Boolean}

}, 
{ timestamps: true });

module.exports = mongoose.model('Pirate', PirateSchema);