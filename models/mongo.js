var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://timothy:Kq0bTEdFvpjIPKlj@cluster0-mm4pv.mongodb.net";

exports.createUser = function(username, password){
    MongoClient.connect(uri, function(err, client) {
    const collection = client.db("shark-tank").collection("users");
    // perform actions on the collection object
    collection.insert({username:password, password:password});
    client.close();
    });
}