const zone = require('../zone/zone');
module.exports = function (app,mongoose) {
    var PersonSchema = mongoose.Schema({
        id: Number,
        name: String
    });
    var Person = mongoose.model('Person', PersonSchema);
    var len =1;
    // Person.remove({},function () {
    //     console.log('remove')
    // })
    app.get('/user/list', function (req, res) {
        Person.find(function (err, people) {
            if (err) return console.error(err);
            len = people.length;
            if(people.length==0) {
                var person1 = {name: '张三', id: 1};
                var person2 = {name:'李四',id: 2};
                var Zhang = new Person(person1);
                var Li = new Person(person2);
                var addPerson1 = new Promise((resolve,reject)=>{
                        Zhang.save(function (err, respones) {
                            if(err) reject(err)
                            resolve();
                        });
                    })
                var addPerson2 = new Promise((resolve,reject)=>{
                        Li.save(function (err, respones) {
                            if(err) reject(err)
                            resolve();
                        });
                    })
                Promise.all([addPerson1,addPerson2]).then(function () {
                    people = [person1,person2]
                    res.json(people)
                }).catch(function (err) {
                    console.log(err)
                    res.json({code:2, msg:'fail'})
                })
            }else {
                res.json(people)
            }
        });
    });
    app.post('/user/add',function (req,res) {
        var person = {name:req.body.name,id:len};
        var NewPerson = new Person(person);
        NewPerson.save(function (err,response) {
            if (err) {
                res.json({code:2,msg:'fail'});
                return console.error(err);
            }
            len++;
            res.json({code:0,msg:'success',data:person});
        });
    });
    app.post('/user/remove',function (req,res) {
        var id = req.body.id;
        console.log(id)
        Person.remove({id: id}, function (err, response) {
            if (err) {
                res.json({code: 2, msg:'fail'});
                return console.error(err);
            }
            res.json({code: 0, msg: 'success'})
        });
    })
    zone(app,mongoose,Person);
};
