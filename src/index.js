const Crafty = require("craftyjs");

Crafty.init(300,300);

Crafty.background('black');

// Load stuff
const player = require("./entities/player")(Crafty)