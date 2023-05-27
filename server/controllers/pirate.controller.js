const Pirate = require ("../model/pirate.model"); 

module.exports.createPirate=(req, res) =>{
    Pirate.create (req.body)
    .then((pirate)=>{
        res.json({pirate})
    })
    .catch((err) => {
          res.status(400).json({ err });
      });
};

module.exports.getOnePirate =(req, res)=>{
    Pirate.findOne ({_id:req.params.id})
    .then ((pirate)=>{
        res.json(pirate)
    })
    .catch((err) => {
        res.json({ err });
      });
};

module.exports.getAllPirates = (req, res) => {
    Pirate.find({}).sort({name:'asc'})
        .then(pirates => {
            console.log(pirates); 
            res.json(pirates);
        })
        .catch(err => {
            console.log(err)
            res.json({err})
        })
}; 

module.exports.updatePirate = (req, res)=>{
    Pirate.findOneAndUpdate({_id:req.params.id}, req.body, {   
        new: true,
        runValidators: true})
    .then((updatedPirate)=>{
        res.json(updatedPirate)
    })
    .catch((err) => {
          res.json({ err });       
      });
}; 

module.exports.deletePirate =(req, res)=>{
    Pirate.deleteOne({_id:req.params.id})
    .then ((deletedRes)=>{
        res.json(deletedRes)
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
  
}

