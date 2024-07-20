const express = require("express");
const port = 3000;
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/",(req , res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}/`);
});






































