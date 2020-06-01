const mongoose= require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
        require:true
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const dishSchema = new Schema({

    name: {
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    commentt:[commentSchema]

},{
    timestamps:true
})

const Dish = mongoose.model('Dish',dishSchema)

module.exports = Dish