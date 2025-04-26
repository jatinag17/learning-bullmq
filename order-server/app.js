const express = require("express");
const app = express();
const port=5000;

app.use(express.json());

app.post("/order",async (req, res) => {});


app.listen(port, () => console.log(`Order server started at port 5000`));
