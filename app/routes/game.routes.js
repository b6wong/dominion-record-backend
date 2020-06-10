module.exports = app => {
    const games = require("../controllers/game.controller.js");
  
    var router = require("express").Router();
  
    // Create a new GAME
    router.post("/", games.create);
  
    // Retrieve all GAMEs
    router.get("/", games.findAll);

    // Retrieve a single GAME with id
    router.get("/:id", games.findOne);
  
    // Update a GAME with id
    router.put("/:id", games.update);
  
    // Delete a GAME with id
    router.delete("/:id", games.delete);
  
    // Create a new GAME
    router.delete("/", games.deleteAll);
  
    app.use('/api/games', router);
  };