
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve CSS and images
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// About page
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Projects and certificates page
app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "projects.html"));
});

// Contact page
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
