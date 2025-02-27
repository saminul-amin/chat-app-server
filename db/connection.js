const mongoose = require("mongoose");

const url = `mongodb+srv://chat-app:Rf1aQRbHSAWt1985@cluster0.ty3g6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
