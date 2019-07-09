import { pass } from "./db-pass";

export function connectDB() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rsumner:"+pass+"bell-3p24o.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    // eslint-disable-next-line
    client.connect(err => {
        return client;
    });
}

export function getAllStories() {
    const db = connectDB();
    return db;
}