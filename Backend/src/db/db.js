const mongoose = require('mongoose')

async function connectDB() {
    
    await mongoose.connect('mongodb+srv://aryk704:aryan123@learn.fswo1zm.mongodb.net/feed')

    console.log('connected to DB')
}

module.exports = connectDB