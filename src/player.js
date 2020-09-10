// Reusable Crafty entity - Don't use it more than once because it is a player

module.exports = (Crafty) => Crafty.e('2D, Canvas, Color, Fourway')
    .attr({x: 10, y: 10, w: 30, h: 30})
    .color('red')
    .fourway(100);