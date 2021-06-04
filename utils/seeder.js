const Room = require('../models/room');
const mongoose = require('mongoose');

const rooms = require('../data/rooms');

mongoose.connect('mongodb://localhost:27017/titan-booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})


const seedRooms = async () => {
    try {
        //this will delete all roos in database
        await Room.deleteMany()
        console.log('All rooms are deleted');

        //insert all rooms after deleted
        await Room.insertMany(rooms)
        console.log('All rooms are added');

        process.exit();

    } catch (error) {
        console.log(error.message)
        process.exit();
    }
}

seedRooms()
