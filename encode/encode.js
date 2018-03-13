const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function EncodeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var im = cv.imencode(config.format, msg.payload)
            node.send({payload: im});
        });
    }
    RED.nodes.registerType("encode",EncodeNode);
} 
