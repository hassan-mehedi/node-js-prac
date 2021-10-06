const express = require("express");
const moongose = require("mongoose");
const routes = require("./routes/blogRoutes");
const { getAllBlogs, getMainPage } = require("./controllers/controller");

// express app
const app = express();

// listen for requests
const dbURI =
    "mongodb+srv://mehedi:mehedi24205247@work.sqy7z.mongodb.net/practice?retryWrites=true&w=majority";
moongose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    });

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", getMainPage);

app.post("/blogs", getAllBlogs);

// Blog routes
app.use("/blog", routes);

// Create page
app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

// About page
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
