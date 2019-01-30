const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove('5c50d5d3da6d3d237ca1c98c').then((todo) => {
	console.log(todo);
});

//Todo.findOneAndDelete({_id: '5be87e3610c093e5e4f5018c'}).then((todo) => {
//   console.log(todo)
// })