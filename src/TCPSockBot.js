const ChatBot = require("./ChatBot.js")
var net = require("net")

class TCPSockBot extends ChatBot {

    constructor(name, port) {
        super("", name);
        this.port = port;
        this.conns = [];
    }

    handle_msg(userid, msg) {
        this.service.handle_msg(this.name, userid, msg);
    }

    send_msg(userid, msg) {
        if (this.conns.hasOwnProperty(userid)) {
            this.conns[userid].write(msg);
        }
    }

    run() {
        this.tcpServer = net.createServer();
        let _this = this;
        this.tcpServer.on('connection', function(sock) {
            let connid = sock.remoteAddress + ':' + sock.remotePort;
            _this.conns.push({key: connid, value: sock})
            sock.on('data', function(data) {
                _this.handle_msg(connid, data.toString());
            });
            sock.on('disconnect', function() {
                delete this.conns[connid];
            });
        });
        this.tcpServer.listen(this.port);
    }

}

module.exports = TCPSockBot
