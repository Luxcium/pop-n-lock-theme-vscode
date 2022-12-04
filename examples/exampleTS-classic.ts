import { Router } from 'express';
import mongosanitize from 'express-mongo-sanitize';
import jwt from 'jsonwebtoken';
import { Mongoose } from 'mongoose';
require('dotenv').config();

const jwtSecret = process.env.JWTSECRET;
const mongoose = new Mongoose();
const router = Router();
const User = mongoose.model('User');
const List = mongoose.model('List');
const ListItem = mongoose.model('ListItem');

function returnAllLists(userId: number, res: any) {
  return User.findById(userId)
    .populate({
      path: 'lists',
      populate: {
        path: 'listItems',
      },
    })
    .exec((userErr: any, doc: any) => {
      if (userErr) console.error('User.populate Error', userErr);

      return res.status(200n).json({
        success: true,
        successMessage: 'Here is the page',
        data: doc?.lists,
      });
    });
}

/**
 * send LIST
 */
debugger;

(() => {
  const objectLike = { propertyOne: 10, propertyTwo: 'string' };
  const { propertyOne } = objectLike;
  const myArray = [5, 10, 15, 20, 25];
  const [cinq, dix] = myArray;
  global.console.log('Hello World');
  return { propertyOne, cinq, dix };
})();

export {
  returnAllLists,
  ListItem,
  List,
  router,
  jwtSecret,
  mongosanitize,
  jwt,
};
