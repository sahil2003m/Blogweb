require("dotenv").config()
const express = require("express");
// const port = 3000;
const app = express();
const port = process.env.PORT;
const {allCategories} = require("./public/Categories.js");
const {featuredArticles} = require("./public/featuredArticles.js")
const { allBlogs } = require("./public/blogs.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap"));


app.get("/", (req, res) => {
    res.render(__dirname + "/views/home",{featuredArticles});
});


app.get("/categories",(req , res) => {
    res.render(__dirname + "/views/categories",{allCategories});
});

app.get("/about",(req , res) => {
    res.render(__dirname + "/views/about");
});

app.get("/contact",(req , res) => {
    res.render(__dirname + "/views/contact");
});


app.get("/category/:id", (req, res) => {
    const categorySlug = req.params.id;
    const filteredBlogs = allBlogs.filter(
      (blog) => blog.category.toLowerCase() === categorySlug
    );
    const category = allCategories.find((cat) => cat.slug === categorySlug);
    if (category) {
      res.render("Blogs", { category, blogs: filteredBlogs });
    } else {
      res.status(404).send("Category not found");
    }
  });


app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});






































