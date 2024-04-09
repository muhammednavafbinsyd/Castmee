const mongoose = require('mongoose');

module.exports = async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://cinesphereinfo:vplFLjmDR5Z7z2wX@castmeecluster.ikasn5t.mongodb.net/?retryWrites=true&w=majority&appName=CastmeeCluster",)
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; 
}
}