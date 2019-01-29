const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// var id = '5c50a14bc86d5b4c2cb3b91b1';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById

User.findById('5c4f8442533fff0a78b9c09a').then((user) =>{
	if (!user) {
		return console.log('ID not found');
	}
	console.log('Todo By Id', user);
}, (e) => {
	console.log(e);
});