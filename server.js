/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db"); // correct path to your db.js
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

require("dotenv").config(); // ← MOVE TO TOP FIRST LINE

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./database/db");
connectDB();
const app = express();

// Middleware
app.use(cors({
   origin: "https://sop-khaki.vercel.app"
}));
app.use(express.json());

// Routes
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/loginRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/teachers", require("./routes/teachersRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/classfees", require("./routes/classFeeRoutes"));
app.use("/api/results", require("./routes/resultRoutes"));
const enrollRouter = require("./routes/enrollRoutes");
app.use("/api/enrollments", enrollRouter); // <-- this must match frontend URL
app.use("/api/register", require("./routes/WebCourses/registrationRoutes"));


// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

*/

require("dotenv").config(); // ← FIRST LINE

const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");

connectDB(); // ← only once, db.js handles it

const app = express();

// Middleware
app.use(cors({
  origin: ["https://sop-khaki.vercel.app", "http://localhost:3000"]
}));
app.use(express.json());

// Routes
app.use("/api/reviews",     require("./routes/reviewRoutes"));
app.use("/api/contact",     require("./routes/contactRoutes"));
app.use("/api/auth",        require("./routes/loginRoutes"));
app.use("/api/students",    require("./routes/studentRoutes"));
app.use("/api/teachers",    require("./routes/teachersRoutes"));
app.use("/api/courses",     require("./routes/courseRoutes"));
app.use("/api/classfees",   require("./routes/classFeeRoutes"));
app.use("/api/results",     require("./routes/resultRoutes"));
app.use("/api/enrollments", require("./routes/enrollRoutes"));
app.use("/api/register",    require("./routes/WebCourses/registrationRoutes"));

// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("School Backend API is running ✅");
});

module.exports = app; // ← Vercel needs this, NOT app.listen