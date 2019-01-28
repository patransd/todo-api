// const MongoClient = requdire('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
	return console.log('Unable to connect to MongoDB server');
}
	const db = client.db('TodoApp');
	console.log('Connected to MongoDB server');

	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5c4f6f08996bea237c9fe26a")
	// }, {
	// 	$set: {
	// 		completed : true
	// 	} 
	// }, {
	// 	returnOriginal: false	
	// }).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5c4f47ced36b8417940ce0f1")
	}, {
		$set: {
			name : "Elli"
		}, 
		$inc: {
			age : 2
		} 
	}, {
		returnOriginal: false	
	}).then((result) => {
		console.log(result);
	});
	// client.close();
});