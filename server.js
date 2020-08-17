const express = require("express");

const HOST = "0.0.0.0";

const PORT = 8080;

const app = express();

app.get("/",(req, res) => {
    res.send("Hello Victronix")
});

// Express server
app.listen(PORT, HOST, (res) => {
    console.log("Server running on PORT: " + PORT);
})

