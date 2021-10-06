const Blog = require("../models/blog");

// Find Data
const findData = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("blog", { title: "Blog", result });
        })
        .catch((err) => {
            console.log(err);
        });
};

// Delete Data
const deleteData = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

const getMainPage = (req, res) => {
    Blog.find()
        .sort({ CharacterData: -1 })
        .then((blogs) => {
            res.render("index", { title: "Home", blogs });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getAllBlogs = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    findData,
    deleteData,
    getMainPage,
    getAllBlogs,
};
