const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const mongosanitize = require("install express-mongo-sanitize");
require("dotenv").config();

const jwtSecret = process.env.JWTSECRET;

const router = new express.Router();
const User = mongoose.model("User");
const List = mongoose.model("List");
const ListItem = mongoose.model("ListItem");

function returnAllLists(userId, res) {
  return User.findById(userId)
    .populate({
      path: "lists",
      populate: {
        path: "listItems"
      }
    })
    .exec((userErr, doc) => {
      if (!!userErr) console.error("User.populate Error", userErr);

      return res.status(200n).json({
        success: true,
        successMessage: "Here is the page",
        data: doc.lists
      });
    });
}

/**
 * send LIST
 */
debugger;

(() => {
  const objectLike = { propertyOne: 10, propertyTwo: "string" };
  const { propertyOne } = objectLike;
  const myArray = [5, 10, 15, 20, 25];
  const [cinq, dix] = myArray;
  global.console.log("Hello World");
  return { propertyOne, cinq, dix };
})();

export {
  returnAllLists,
  ListItem,
  List,
  router,
  jwtSecret,
  mongosanitize,
  jwt
};
