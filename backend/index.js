// server/index.js

const express = require("express");
//const session = require('express-session');

const PORT = process.env.PORT || 3001;

const app = express();


let count = 0

app.get("/api", (req, res) => {
    if (!count)
        count = 0;
    count++;
    res.json({ message: count.toString() });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});