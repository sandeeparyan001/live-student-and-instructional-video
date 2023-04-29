const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
mongoose.connect("mongodb://localhost:27017/contact-form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongodatabase.");
}).catch(()=>{
    console.log("Not connected to database.")
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/form", (req, res) => {

  const newMessage =  new Message({ name: req.body.name, email:req.body.email, message: req.body.message });
  newMessage.save().then(() => {
      // if (err) {
      //   console.error("Error saving message: ", err);
      //   res.sendStatus(500);
      //   return
      // }
      console.log("Message saved to database");
      console.log(newMessage);
      res.send("Message sent successfully");
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
