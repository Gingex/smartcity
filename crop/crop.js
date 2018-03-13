const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function CropNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var newMsg = {images: []};
        this.on('input', function(msg) {
            var im = msg.image;
            msg.data.forEach(function(entry){
                newMsg.images.push(im.getRegion(entry));
            })
            node.send(newMsg);
        });
    }
    RED.nodes.registerType("crop",CropNode);
} 
 
