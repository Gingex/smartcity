const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function DecodeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var im = cv.imdecode(msg.payload);
            msg.payload = im;
            node.send(msg);
        });
    }
    RED.nodes.registerType("decode",DecodeNode);
} 
