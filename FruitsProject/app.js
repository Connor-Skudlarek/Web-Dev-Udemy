const mongoose = require("mongoose");
// Replace the uri string with your MongoDB deployment's connection string.

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// const url = "mongodb://localhost:27017"

// const dbName = "fruitsDB"

// const client = new MongoClient(url);

// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connected successfully to the server");
//     const db = client.db(dbName);
//     findDocuments(db, function(){
//         client.close();
//     });
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of fruit is missing!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Kinda sour",
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "One of the best fruits!",
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Amazing fruit!",
});

// pineapple.save();
// const person = new Person({
//   name: "John",
//   age: 37,
// });

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple,
});

// Person.updateOne({ name: "John" }, { favoriteFruit: banana }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated person.");
//   }
// });

// kiwi.save()
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All fruits saved to fruitsDB successfully.");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    let namesOfFruits = new Array(fruits.length);
    for (let i = 0; i < fruits.length; i++) {
      namesOfFruits[i] = fruits[i].name;
    }
    console.log(namesOfFruits);
  }
});

// fruit.save();
// person.save()
// const insertDocuments = function(db, callback){
//     const collection = db.collection("fruits");

//     collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kinda sour"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "One of the best fruits!"
//         }
//     ], function(err, result){
//         assert.equal(err, null);
//         assert.equal(3, result.insertedCount);
//         assert.equal(3, Object.keys(result.insertedIds).length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// };

// const findDocuments = function (db, callback) {
//   const collection = db.collection("fruits");

//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//   });
// };
