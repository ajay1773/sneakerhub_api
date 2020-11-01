const express = require("express");
const UserSchema = require("../models/UserModel");
const router = express.Router();
const config = require("../config");
const jwt = require("jsonwebtoken");
router.post('/signin', (req, res) => {
       // console.log(req.body)
       UserSchema.findOne({
              email: req.body.email,
              password: req.body.password
       }, (err, result) => {
              if (err) {
                     console.log("error occured in finding the user");
                     res.json({ msg: "Could not find the user" });
              } else if (result === null) {
                     console.log("No users found");
                     new UserSchema({
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password,
                            isAdmin: false,
                            cart: [],

                     }).save((err, result) => {
                            err ? res.send({ message: "Could not save" }) : res.send({ user: result })
                     })

              }
              else {
                     res.send({ msg: `Welcome ${result.name}` });
              }
       })
})
router.post("/login", (req, res) => {
       UserSchema.findOne({
              email: req.body.email,
              password: req.body.password
       }, (err, result) => {
              if (err) {
                     res.status(400).send({ error: "Error occured" })
              }
              if (result === null) {
                     res.send({ success: false });
              }
              else {
                     const password = req.body.password;
                     const token = jwt.sign(password, config.JWT_TOKEN);
                     res.send({ success: true, token: token, user: result });
              }

       })
})
router.get("/profile", (req, res) => {
       console.log(req.query)
       const TokenFromFrontend = req.headers.authorization.split(" ")[1];
       console.log(TokenFromFrontend);
       jwt.verify(TokenFromFrontend, config.JWT_TOKEN, (err, user) => {
              err ? res.send({ success: false }) : UserSchema.findById(req.query.id).then(doc => { res.send({ success: true, user: doc }) }).catch(err => { console.log(err) })
       })

})
router.post("/addaddress", (req, res) => {
       console.log(req.query, req.body);
       UserSchema.findByIdAndUpdate(req.query.uid, { $push: { savedAddresses: req.body } }, { useFindAndModify: false }).then(doc => res.send({ msg: "saving successful" })).catch(err => console.log(err))
       //res.send({ msg: "You came through" });
})
router.post('/admin', (req, res) => {
       console.log(req.body);
       UserSchema.findOne({ email: req.body.email, password: req.body.password }).then(doc => {
              if (doc === null) {
                     res.send({ success: false })
              }
              else {
                     const admintoken = jwt.sign(req.body.password, config.JWT_TOKEN);
                     res.send({ doc, success: true, token: admintoken })
              }
       }).catch(err => { res.send(err) });
})
router.get("/createadmin", (req, res) => {
       new UserSchema({
              name: "Ajay Dhiman",
              email: "ajaydhiman6151@gmail.com",
              password: "password",
              isAdmin: true,
              cart: []
       }).save((err, result) => {
              if (err) {
                     res.json(err);
              }
              else {
                     console.log(result)
                     res.json(result);
              }
       })


});
module.exports = router;