const PirateController = require ("../controllers/pirate.controller");

module.exports = (app) => {
    app.post ("/pirates", PirateController.createPirate ); 
    app.get ("/pirates", PirateController.getAllPirates);
    app.get ("/pirates/:id", PirateController.getOnePirate);
    app.put ("/pirates/edit:/id", PirateController.updatePirate);
    app.delete ("/pirates/:id", PirateController.deletePirate);

};