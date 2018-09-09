// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to Mongodb server: ${err.message}`);          
    }

    console.log('Connected to MongoDB server');    

    // db.collection('Todos')
    //     .find({_id: new ObjectID('5b95411cbc9e224643e4eb1e')})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined ,2));            
    //     }, (err) => {
    //         console.log(`Unable to fetch todos ${err.message}`);        
    //     });   
    
    // db.collection('Todos')
    // .find()
    // .count()
    // .then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);            
    // }, (err) => {
    //     console.log(`Unable to fetch todos ${err.message}`);        
    // });   

    db.collection('Users')
    .find({name: "Lucio"})
    .count()
    .then((count) => {
        console.log('Users');
        console.log(`Users count: ${count}`);            
    }, (err) => {
        console.log(`Unable to fetch users ${err.message}`);        
    }); 

    db.close();
});
