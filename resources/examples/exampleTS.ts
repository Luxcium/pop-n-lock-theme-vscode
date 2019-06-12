// import expressMongoSanitize from 'express-mongo-sanitize';
// import jsonwebtoken from 'jsonwebtoken';
import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

config();
const jwtSecret = process.env.JWTSECRET;
const router = express.Router();
const User = mongoose.model('User');
const List = mongoose.model('List');
const ListItem = mongoose.model('ListItem');

function returnAllLists(userId: any, res: any) {
  return User.findById(userId)
    .populate({
      path: 'lists',
      populate: {
        path: 'listItems'
      }
    })
    .exec((userErr, doc) => {
      if (!!userErr) {
        console.error('User.populate Error', userErr);
      }
      return res.status(200).json({
        success: true,
        successMessage: 'Here is the page',
        data: doc.collection
      });
    });
}

debugger;

(() => {
  const objectLike = { propertyOne: 10, propertyTwo: 'string' };
  const { propertyOne } = objectLike;
  const myArray = [5, 10, 15, 20, 25];
  const [cinq, dix] = myArray;
  global.console.log('Hello World');
  return { propertyOne, cinq, dix };
})();

export type defined = string | 450 | null | true | false | undefined;
@sealed
class Greeter {
  public greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  public greet() {
    return 'Hello, ' + this.greeting;
  }
}

export async function greeter(name: any) {
  return await delayedHello(name, Delays.Long);
}
export async function notMuch(ValueIn: string) {
  return { ValueIn };
}

class ParentClass {}
interface IInterface {
  value: string;
}

interface Arguments {
  value: string | number;
  angel?: number;
}

enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000
}

function sealed(constructor: any): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

async function asyncFunction(): Promise<any> {
  const objectLike = { propertyOne: 10, propertyTwo: 'string' };
  const { propertyOne } = objectLike;

  const variable1 = 2 + 10;
  let message: string = 'this is a string indeed';
  message = 'this is a ${"string"}  indeed';
  message = `this is a  ${'string'}   indeed`;
  const variable3 = new Greeter(message);

  const variable2 = await variable1.toFixed(200 - 400);
  return { variable2, variable3, propertyOne };
}
export type anyone = number | string;

asyncFunction.somemethode = (): 10 | anyone | (() => 10) | null => {
  return 10;
};

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  const angel = checker ? 48 : 47;
  const some = new ClassName({ value: 'value', angel });
  const others = [
    some.otherMethodeValue,
    450,
    null,
    NaN,
    Infinity,
    this._othervalue,
    true,
    false,
    undefined
  ];
  return { some, variable1, others };
};
/**
 * Some predefined delays (in milliseconds).
 */

/**
 * Returns a Promise<string> that resolves after given time.
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay
 *  resolution of the Promise.
 * @returns {Promise<string>}
 * @see https://www.exemple.com
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay)
  );
}
export class ClassName extends ParentClass implements IInterface {
  public set otherMethodeValue(some) {
    this._othervalue = some;
    const anyhow = this._otherMethode().souris;
    console.log(some, anyhow, Math.PI);
  }
  public get otherMethodeValue() {
    return this._otherMethode();
  }
  public static staticValue: any;
  public value: string;
  public angel: any;1
  public othervalue: any;
  private _othervalue: any;
  public constructor(parametre: Arguments) {
    super();
    if (isNaN(parametre.angel) && typeof parametre.value === 'number') {
      this.angel = Infinity;
    }
  }
  public async asyncMethode() {
    let checker: boolean;
    checker = true;
    checker = false;
    const angel = checker ? 48 : 47;
    const aNewClass = new ClassName({ value: 'value', angel: angel });
    console.log(aNewClass.value, checker, Math.PI);
    const others = [450, null, true, false, undefined];
    return { aNewClass, others };
  }
  public otherMethode() {
    //
  }
  private _otherMethode() {
    try {
      const popo: string = 'ceci est un canon';
      let mice = 'jerry';
      mice = 'ichy';
      console.log('mice', mice);
      return {
        values: [
          450,
          null,
          NaN,
          Infinity,
          this._othervalue,
          true,
          false,
          undefined
        ],
        popo,
        souris: mice
      };
    } catch (error) {
      throw new global.GLOBAL.global.Error(error.message);
    }
  }
}
export { jwtSecret, List, ListItem, returnAllLists, router, User };

export function formatStockChartData(stockChartDataInfos: any[]): any[] {
  return stockChartDataInfos.map(stockChartData => {
    return {
      symbol: stockChartData.symbol,
      iexSymbolID: stockChartData.iexSymbolID,
      qtSymbolID: stockChartData.qtSymbolID,
      date: stockChartData.date,
      minute: stockChartData.minute,
      label: stockChartData.label,
      candle: {
        high: stockChartData.high,
        low: stockChartData.low,
        open: stockChartData.open,
        close: stockChartData.close
      },
      volume: stockChartData.volume,
      average: stockChartData.average,
      notional: stockChartData.notional,
      numberOfTrades: stockChartData.numberOfTrades,
      marketHigh: stockChartData.marketHigh,
      marketLow: stockChartData.marketLow,
      marketAverage: stockChartData.marketAverage,
      marketVolume: stockChartData.marketVolume,
      marketNotional: stockChartData.marketNotional,
      marketNumberOfTrades: stockChartData.marketNumberOfTrades,
      marketOpen: stockChartData.marketOpen,
      marketClose: stockChartData.marketClose,
      changeOverTime: stockChartData.changeOverTime,
      marketChangeOverTime: stockChartData.marketChangeOverTime
    };
  });
}
