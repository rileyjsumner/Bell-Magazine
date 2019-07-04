// const collection = client.db("test").collection("devices");
require("db-pass");

function connectDB() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rsumner:"+pass+"@bell-db-bjgr6.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        return client;
    });
}

function getAllStories() {
    const db = connectDB();

}

function uploadStory() {

}