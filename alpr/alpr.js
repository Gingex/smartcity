const cv = require('opencv4nodejs');
var exec = require('child_process').exec, child;

 module.exports = function(RED) {
    function AlprNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var newMsg = {payload:""};
        
        this.on('input', function(msg) {
    child = exec('alpr -c eu -j ' + msg.payload,
        function (error, stdout, stderr) {
            node.send({payload:JSON.parse(stdout)});
        });
            
    });
    }
    
    RED.nodes.registerType("alpr",AlprNode);
} 
 
