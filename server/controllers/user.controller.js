const User = require ("../model/user.model")

module.exports.createUser=(req, res) =>{
    User.create (req.body)
    .then((user)=>{
        res.json(user)
    })
    .catch((err) => {
          res.status(400).json({ err });
      });
};

module.exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(400).json({ error: 'Invalid email or password' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'An error occurred' });
      });
  };
