import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();

app.use(cors());
// app.use(cors({
//   origin: 'https://pawelheleniak.pl',
//   methods: ['POST'],
// }));
app.use(express.json());

// Transporter SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Endpoint do wysyłki maila
app.post(
  "/send-mail",
  body("to").isEmail(),
  body("subject").isString().notEmpty(),
  body("text").isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { subject, text } = req.body;
    const myEmail = "kontakt@pawelheleniak.pl";
    try {
      const info = await transporter.sendMail({
        from: `"Mailer" <${process.env.SMTP_USER}>`,
        to: myEmail,
        subject,
        text,
      });

      res.json({ success: true, messageId: info.messageId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Mail not sent" });
    }
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mailer API running on port ${port}`);
});
