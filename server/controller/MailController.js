const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

exports.messageSending = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      return res.status(401).json({message:"Contact's fields are required"});
    }
    if (!validateEmail(email) || !email) {
      return res.status(400).json({email: "Invalid email address" });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cinesphere.info@gmail.com",
        pass: "mkwvafvfhhgxgomj",
      },
    });
    const mailOptions = {
      from: email, 
      to: "cinesphere.info@gmail.com", 
      subject: "New Message Received",
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({message: "Failed to send email"});
      }
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}
