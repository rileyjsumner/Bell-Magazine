require("db-pass");

exports.connectDB = () => {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rsumner:"+pass+"bell-3p24o.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        return client;
    });
};

exports.getAllStories = () => {
    const db = connectDB();

};

exports.uploadStory = () => {

};