const cv = require('opencv4nodejs');
 module.exports = function(RED) {
    function HueNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            var im = msg.payload;
            im = im.cvtColor(cv.COLOR_BGR2HSV);
            const [matH, matS, matV] = im.splitChannels();
            const hist = cv.calcHist(matH , [{channel: 0, bins: 180, ranges: [0, 180]}]);
            var value = hist.minMaxLoc().maxLoc;
            msg.payload = value.y;
            node.send(msg);
        });
    }
    RED.nodes.registerType("hue",HueNode);
} 
