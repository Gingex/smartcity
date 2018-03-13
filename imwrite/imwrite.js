const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function ImWriteNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            this.path = config.path ? config.path : msg.path;
            this.path = this.path + getRandomInt(0,3173) + ".jpg";
            cv.imwrite(this.path, msg.img);
            node.send({payload:this.path});
        });
    }
    RED.nodes.registerType("imwrite",ImWriteNode);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
