module.exports = function (app,mongoose,Persons) {
    'use strict'
    var ZoneSchema = mongoose.Schema({
        zoneid:{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
        id:Number,
        avatar:String,
        // nick:String,
        content:String,
    });
    var dir = __dirname;

    var Zone = mongoose.model('Zone', ZoneSchema);

    // Zone.remove({},function () {
    //     console.log('remove')
    // })
    function initZone(req,res) {
        var zone1 = {id:1,avatar:'',content:'咱们老百姓啊，真啊真高兴'};
        var zone2 = {id:2,avatar:'',content:'啦啦啦啦啦  ，真啊真高兴'};
        var Zone1 = new Zone(zone1);
        var Zone2 = new Zone(zone2);
        var addZone1 = new Promise((resolve,reject)=>{
                Zone1.save(function (err, respones) {
                if(err) reject(err)
                resolve();
            });
    })
        var addZone2 = new Promise((resolve,reject)=>{
                Zone2.save(function (err, respones) {
                if(err) reject(err)
                resolve();
            });
    })
        Promise.all([addZone1,addZone2]).then(function () {
            getUser([zone1,zone2],res)
        }).catch(function (err) {
            console.log(err);
            res.json({code:2, msg:'fail'})
        })
    }
    function getUser(arr,res) {
        var arrs = [];
        var len=arr.length
    for(let i=0;i<len;i++){
        var e = arr[i];
            arrs.push(new Promise((resolve, reject) => {
                    var el = {};
                    el.id = e.id;
                    el.content = e.content;
                        Persons.find({id: e.id}, function (err, response) {
                        if (err) console.log(err);
                        if(response[0] && response[0].name) {
                            Object.assign(el, {nick: response[0].name})
                        }else{
                            Object.assign(el, {nick: '我'})
                        }
                        resolve(el)
                    })
                })
            )
    }
      Promise.all(arrs).then(function (result) {
          res.json({code: 0, data: result})
     }).catch(function (err) {
          console.log(err)
      })
    }

    app.get('/zone/init',function (req,res,next) {
        Zone.find(function (err,zonelist) {
            if (err) return console.error(err);
            var len = zonelist.length;
            if(len == 0){
                next()
            }else{
              getUser(zonelist,res)
            }
        })
    },initZone)
    app.post('/zone/add',function (req,res) {
        var content = req.body.content;
        var add_zone = {id:0,avatar:'',content:content};
        var add_Zone = new Zone(add_zone);
        add_Zone.save(function (err,response) {
            if (err) {
                res.json({code:2,msg:'fail'});
                return console.error(err);
            }
            res.json({code:0,msg:'success',data:{id:0,nick: '我',avatr:'',content:content}});
        });
    })
}