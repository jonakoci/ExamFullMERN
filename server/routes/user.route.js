const UserController = require ("../controllers/user.controller")

module.exports = (app) => {
    app.post ("/user/create", UserController.createUser); 
    app.post ("/login", UserController.loginUser);
};