const Crafty = require("craftyjs");

const player = require("./player");

Crafty.init(300,300);

Crafty.background('black');

player(Crafty);