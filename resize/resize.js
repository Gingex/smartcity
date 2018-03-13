 const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function ResizeNode(config) {
        RED.nodes.createNode(this,config);
        this.width=config.width;
        this.heigth=config.heigth;
        this.path=config.path;
        var node = this;
        this.on('input', function(msg) {
            var width = parseInt(node.width);
            var heigth = parseInt(node.heigth);
            var im = msg.payload;
            im = im.resize(width, heigth);
            node.send({img: im});
        });
    }
    RED.nodes.registerType("resize",ResizeNode);
}
