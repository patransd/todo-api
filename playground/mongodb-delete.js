// const MongoClient = requdire('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
	return console.log('Unable to connect to MongoDB server');
}
	const db = client.db('TodoApp');
	console.log('Connected to MongoDB server');

	//deleteMany
	db.collection('Users').deleteMany({name: 'Elli'}).then((result) => {
		console.log(result);
	});

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	//findOneAndDelete
	db.collection('Users').findOneAndDelete({_id: new ObjectID("5c4f47ef39ce4141d4746034")}).then((result) => {
		console.log(result);
	});	

	// client.close();
});