const mongoose =require('mongoose')

const Blogschema = new mongoose.Schema({
    Image:{
        type:String,
        required:true,
    },
    Title:{
        type:String,
        required:true,

    },
    Description:{
        type:String,
        required:true,
    },
});
const Blog = new mongoose.model("Blog",Blogschema);
module.exports = Blog;