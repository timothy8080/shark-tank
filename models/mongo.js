var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://timothy:Kq0bTEdFvpjIPKlj@cluster0-mm4pv.mongodb.net";

exports.createUser = function(username, password, email, creditcard){
    MongoClient.connect(uri, function(err, client) {
    const collection = client.db("shark-tank").collection("users");
    // perform actions on the collection object
    collection.insert({username:username, password:password, email:email, creditcard:creditcard});
    client.close();
    });
}

exports.findUser = function(username, password, cb){
    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("shark-tank").collection("users");
        collection.find({'username':username, "password":password}, function(err, cursor){
            cursor.toArray(function(err, arr){
                if (!arr.length){
                    cb(false);
                } else {
                    cb(arr[0]);
                }
                db.close();
            });
            
        });
    });
}