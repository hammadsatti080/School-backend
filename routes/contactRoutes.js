/*const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    // Save to DB
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send to admin
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    // Send THANK YOU to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting us",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out 🙌</p>
        <p>We received your message and will contact you soon.</p>
        <br/>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
*/
/*
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // Save to DB
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();
    console.log("Saved to DB ✅");

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,      // Your Gmail
        pass: process.env.EMAIL_PASS,      // App Password
      },
    });

    console.log("Sending email to admin...");

    // Send to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,       // MUST be your Gmail
      to: process.env.EMAIL_USER,         // Admin receives email
      subject: `New Contact Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("Admin email sent ✅");
    console.log("Sending THANK YOU email to user...");

    // Send THANK YOU to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,       // MUST be your Gmail
      to: email,                          // User receives thank-you
      subject: "Thanks for contacting us",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out 🙌</p>
        <p>We received your message and will contact you soon.</p>
        <br/>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("User thank-you email sent ✅");

    // Response to frontend
    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
*/
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();
    console.log("Saved to DB ✅");

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("Admin email sent ✅");

    // Send thank-you email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting us",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out 🙌</p>
        <p>We received your message and will contact you soon.</p>
        <br/>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("User thank-you email sent ✅");

    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (err) {
    console.log("EMAIL ERROR:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;