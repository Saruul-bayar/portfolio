import express from "express";
import cors from "cors";
import nodeMailer from "nodemailer";

const router = express.Router();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server is running on port ${port}`));

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "b.sakta2000@gmail.com",
    pass: "ngxzcjtvpvtvatpp",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const user = req.body;

  const name = user.firstName + user.lastName;
  const phone = user.phone;
  const message = user.message;
  const email = user.email;
  const mail = {
    from: name,
    to: "b.sakta2000@gmail.com",
    subject: "Contact From Submission - Portfolio ",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log("SUCEESSSSS");
      res.json({ code: 200, status: "Message sent" });
    }
  });
});
