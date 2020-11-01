const express = require("express");
const data = require("./data");
const bodyParser = require("body-parser");
const app = express();
const ProductSchema = require("./models/ProductModel");
const UserSchema = require("./models/UserModel");
const config = require('./config');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./ROutes/UserRoutes");
const productRoute = require("./ROutes/ProductRoutes");
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl || "mongodb://localhost/sneakerhub", { useNewUrlParser: true, useUnifiedTopology: true })
       .then(console.log("connected to database"))
       .catch(error => console.log(error.reason));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/", productRoute);
const portname = config.PORT || 5000;
//sending product data
app.get("/products", (req, res) => {
       ProductSchema.find((err, result) => {
              if (err) {
                     console.log(err);
                     res.status(400).send({ message: "Could not find the documents" })
              }
              else {
                     console.log("Data found");
                     res.send(result)
              }
       })

});

app.get("/cart", (req, res) => {
       console.log(req.query);
       UserSchema.findById(req.query.userID).then(doc => { res.send(doc) }).catch(err => console.log(err))
})

app.get("/search", (req, res) => {
       console.log(req.query);
       ProductSchema.find({
              name: {
                     $regex: req
                            .query.name, $options: 'i'
              }
       }).then(doc => res.send(doc)).catch(err => console.log(err));

})

if (process.env.NODE_ENV === "production") {
       app.use(express.static('build'))

}

app.listen(portname, () => console.log(`server started at ${portname}`));