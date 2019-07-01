// const collection = client.db("test").collection("devices");
function connectDB() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rsumner:admin@bell-db-bjgr6.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        return client;
    });
}

function getAllStories() {
    const db = connectDB();

}
