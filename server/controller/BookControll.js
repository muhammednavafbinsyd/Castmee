const AsyncHandler = require("express-async-handler");
const bookModel = require("../model/BookModel");

exports.createBook = AsyncHandler(async (req, res) => {
  const {
    bookname,
    authorname,
    price,
    mrp,
    publishername,
    publisheddate,
    isbn,
    binding,
    edition,
    pages,
    language,
    description,
    buylink
  } = req.body;
  const image = req.files.map((file) => file.filename);
  if (
    !bookname.trim() ||
    !authorname.trim() ||
    !price.trim() ||
    !mrp.trim() ||
    !publishername.trim() ||
    !publisheddate.trim() ||
    !isbn.trim() ||
    !binding.trim() ||
    !edition.trim() ||
    !pages.trim() ||
    !language.trim() ||
    !description.trim()||
    !buylink.trim()
  ) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  try {
    const bookData = await bookModel.create({
      Image: image,
      Bookname: bookname,
      Authorname: authorname,
      Price: price,
      Mrp: mrp,
      Publishername: publishername,
      Publisheddate: publisheddate,
      Isbn: isbn,
      Binding: binding,
      Edition: edition,
      Pages: pages,
      Language: language,
      Description: description,
      Buylink:buylink
    });
    res.json(bookData);
  } catch (error) {
    console.log(error);
  }
});

exports.bookRead = async (req, res) => {
  const page = parseInt(req.query.page);
  const pagesize = parseInt(req.query.limit);
  const skip = (page - 1) * pagesize;
  try {
    const query = {};
    const totalitems = await bookModel.countDocuments(query);
    const totalpages = Math.ceil(totalitems / pagesize);
    const bookData = await bookModel
      .find(query)
      .skip(skip)
      .limit(pagesize)
      .exec();
    res.json({ bookData, totalpages });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

exports.bookreadEdit = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const bookData = await bookModel.findById(id);
    res.json(bookData);
  } catch (error) {
    console.log(error);
  }
});

exports.bookUpdate = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  const {
    Bookname,
    Authorname,
    Price,
    Mrp,
    Publishername,
    Publisheddate,
    Isbn,
    Binding,
    Edition,
    Pages,
    Language,
    Description,
    Buylink
  } = req.body;
  let Image = req.files.map((file) => file.filename);

  if (
    !Bookname.trim() ||
    !Authorname.trim() ||
    !Price.trim() ||
    !Mrp.trim() ||
    !Publishername.trim() ||
    !Publisheddate.trim() ||
    !Isbn.trim() ||
    !Binding.trim() ||
    !Edition.trim() ||
    !Pages.trim() ||
    !Language.trim() ||
    !Description.trim() ||
    !Buylink.trim()
  ) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  try {
    const bookDataUpdate = await bookModel.findById(id);

    if (!Image || Image.length === 0) {
      Image = bookDataUpdate.Image;
    }
    bookDataUpdate.Image = Image;
    bookDataUpdate.Bookname = Bookname;
    bookDataUpdate.Authorname = Authorname;
    bookDataUpdate.Price = Price;
    bookDataUpdate.Mrp = Mrp;
    bookDataUpdate.Publishername = Publishername;
    bookDataUpdate.Publisheddate = Publisheddate;
    bookDataUpdate.Isbn = Isbn;
    bookDataUpdate.Binding = Binding;
    bookDataUpdate.Edition = Edition;
    bookDataUpdate.Pages = Pages;
    bookDataUpdate.Language = Language;
    bookDataUpdate.Description = Description;
    bookDataUpdate.Buylink = Buylink;
    const toSave = await bookDataUpdate.save();
    res.json(toSave);
  } catch (error) {
    console.log(error);
  }
});
exports.bookDelete = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const bookData = await bookModel.findOneAndDelete(id);
    if (bookData) {
      res.send(bookData);
    } else {
      res.status(404).send("failed to delete");
    }
  } catch (error) {
    res.status(500).send("failed to delete workout plan");
    console.log("failed to delete workout plan", error);
  }
});

// users

exports.bookfrontread = AsyncHandler(async (req, res) => {
  try {
    const data = await bookModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
