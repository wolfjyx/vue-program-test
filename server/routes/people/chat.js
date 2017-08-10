var http = require('http');
var request = require('request');
module.exports = function (app,mongoose) {
    var ChatListSchema = mongoose.Schema({
        id: Number,
        content:String,
        isReply:Boolean
    });
    var ChatList = mongoose.model('ChatList', ChatListSchema);

    app.get('/chat/list/init/',function (req,res) {
        ChatList.find(req.query,function (err, list) {
            if (err) return console.error(err);
            res.json(list)
        });
    });
    app.post('/send/chat/lists', function (req, res) {

        var Li = new ChatList(req.body);
        Li.save(function (err, response) {
            if (err)return console.error(err);
            // res.json(list)
            request.get({url:'http://op.juhe.cn/robot/index', qs:{
                info: req.body.content,
                key: '47c25bc59dc87d0844e5c422ab7fc266'
            }}, function (err,data,body) {
                if (!err && data.statusCode == 200) {
                    var $$data  = {
                        code:0,
                        content:JSON.parse(body).result.text,
                        isReply: true,
                        id:req.body.id
                    }
                    res.json($$data)
                    new ChatList($$data).save(function (err, response) {
                        if (err)return console.error(err)
                    })
                }
            })
        })
    })
};
