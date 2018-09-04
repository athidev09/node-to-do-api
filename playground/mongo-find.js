const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
//Connection url
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    } console.log('Connected to Mongo server');
    const db = client.db('TodoApp');
    db.collection('Tools').find().toArray().then((docs) => {
        console.log('Tools');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
            console.log('Unable to fetch todos',err)

    });
});