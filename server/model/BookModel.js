const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    Image:[{
        type:String,
        required:true,
    }],
    Bookname:{
        type:String,
        required:true,
    },
    Authorname:{
        type:String,
        required:true,
    },
    Price:{
        type:String,
        required:true, 
    },
    Mrp:{
        type:String,
        required:true, 
    },
    Publishername:{
        type:String,
        required:true, 
    },
    Publisheddate:{
        type:String,
        required:true, 
    },
    Isbn:{
        type:String,
        required:true, 
    },
    Binding:{
        type:String,
        required:true, 
    },
    Edition:{
        type:String,
        required:true, 
    },
    Pages:{
        type:String,
        required:true, 
    },
    Language:{
        type:String,
        required:true, 
    },
    Description:{
        type:String,
        required:true, 
    },
    Buylink:{
        type:String,
        required:true, 
    }
})

const book = new mongoose.model("book",bookSchema)
module.exports =book;