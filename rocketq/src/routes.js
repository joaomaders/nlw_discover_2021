const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController.js');

const route = express.Router();

route.get('/', (req, res) => {
    res.render('index', {page: 'enter-room'})
});

route.get('/room/:room-id', (req, res) => {
    res.render('room')
});

route.get('/create-pass', (req, res) => {
    res.render('index', {page: 'create-pass'})
});

route.post('/question/:room/:question/:action', QuestionController.index);

route.post('/create-room', RoomController.create);


module.exports = route;