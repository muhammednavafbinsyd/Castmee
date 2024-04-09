const AsyncHandler = require("express-async-handler");
const Blogmodel = require("../model/BlogModel");

exports.createblog = AsyncHandler(async (req, res) => {
  const { Title, Description } = req.body;
  const Image = req.file.filename;

  if(!Image){
    res.status(400).json({ message:"Image is required"})
  }
  if(!Title.trim()){
     res.status(400).json({message:"Title is required"})
  }
  if(!Description.trim()){
    res.status(400).json({message:"Description is required"})
  }else{
    try {
      const blogData = await Blogmodel.create({
        Image: Image,
        Title: Title,
        Description: Description,
      });
      res.json(blogData);
    } catch (error) {
      console.log(error + "internal server err");
    }
  }

});

exports.readBlog = AsyncHandler(async (req, res) => {
  const page = parseInt(req.query.page);
  const pagesize = parseInt(req.query.limit);
  const skip = (page - 1) * pagesize;
  try {
    const query = {};
    const totalitems = await Blogmodel.countDocuments(query);
    const totalpages = Math.ceil(totalitems / pagesize);
    const blogData = await Blogmodel
    .find(query)
    .skip(skip)
    .limit(pagesize)
    .exec();
    res.json({blogData,totalpages});
  } catch (error) {
    console.log(error, "internal server err"); 
  }
});

exports.blogeditRead = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  try{
    const blogData = await Blogmodel.findById(id);
    res.json(blogData);
  }catch(error){
    console.log(error, "internal server err");
  }
})

exports.blogUpdate = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  const {Title, Description} = req.body;
  const image =req.file ? req.file.filename: null;
  try{
    if (!Title || !Description) {
      return res
        .status(400)
        .json({ error: "Title and description are required." });
    }
    const toUpdate =  await Blogmodel.findById(id)
    if(image){
      toUpdate.Image=image;
    }
    toUpdate.Title=Title;
    toUpdate.Description=Description;
    const toSave = await toUpdate.save();
    res.json(toSave);

  }catch(error){
    console.log(error);
  }
})
exports.blogDelete = AsyncHandler(async(req,res)=>{
  const id = req.params.id;
  try{
    const blogData = await Blogmodel.findOneAndDelete(id);
    if (blogData) {
      res.send(blogData);
    } else {
      res.status(404).send("failed to delete");
    }
  }catch(error){
    res.status(500).send("failed to delete ");
    console.log("failed to delete ",error);
  }
})

// users

exports.blogfrontRead = AsyncHandler(async(req,res)=>{
  try{
    const blogData = await Blogmodel.find()
    res.json(blogData);
  }catch(error){
    console.log(error);
  }
})

exports.blogview = AsyncHandler(async(req,res)=>{
  const Title=req.params.Title
 try{
  const blogData = await Blogmodel.findOne({Title:Title})
  res.json(blogData);
 }catch(error){
  console.log(error);
 }

})