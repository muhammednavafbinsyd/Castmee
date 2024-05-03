var express = require("express");
var router = express.Router();
const multer = require("multer");
const tokenPass = require("../middleware/TokenVerify");
const admincontroll = require("../controller/AdminControll");
const blogcontroll = require("../controller/BlogControll");
const bookcontroll = require("../controller/BookControll");
const mailcontroll = require("../controller/MailController")


// multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });
//
// multer for tinyMce
var storagetiny = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var uploadtiny = multer({ storage: storagetiny });
//
// Admin
// router.post('/postadmin',admincontroll.createadmin);

router.post("/admin_login", admincontroll.login);

// Crudblog
router.post(
  "/blog_post",
  tokenPass,
  upload.single("image"),
  blogcontroll.createblog
);
router.get("/blog_read", tokenPass, blogcontroll.readBlog);
router.get("/blog_edit_read/:id", tokenPass, blogcontroll.blogeditRead);
router.put(
  "/blog_update/:id",
  tokenPass,
  upload.single("image"),
  blogcontroll.blogUpdate
);
router.delete("/blog_delete/:id", blogcontroll.blogDelete);
//
// Crudbook
router.post(
  "/book_post",
  tokenPass,
  upload.array("image"),
  bookcontroll.createBook
);
router.get("/book_read", tokenPass, bookcontroll.bookRead);
router.get("/book_edit_read/:id", tokenPass, bookcontroll.bookreadEdit);
router.put(
  "/book_update/:id",
  tokenPass,
  upload.array("image"),
  bookcontroll.bookUpdate
);
router.delete("/book_delete/:id", bookcontroll.bookDelete);
//
// tinyMce Image Upload
router.post("/tinymceImageUpload", uploadtiny.single("file"), (req, res) => {
  const imageUrl = `http://localhost:2000/uploads/${req.file.filename}`;
  res.json({ location: imageUrl });
});
//
// send messages {nodemailer}
router.post("/send_mail",mailcontroll.messageSending)


// castmeeUser
router.get("/blog_read_front", blogcontroll.blogfrontRead);
router.get("/blog_read_view/:Title", blogcontroll.blogview);
router.get("/book_read_front", bookcontroll.bookfrontread);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
