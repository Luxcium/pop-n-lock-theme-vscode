#!/usr/bin/env node

const repl = require('repl');
const chalk = require('chalk');
const jsdom = require('jsdom');
const puppeteer = require('puppeteer');
const { JSDOM } = jsdom;
const log = console.log;

const myRepl = repl.start({
  terminal: true,
  useColors: true,
  ignoreUndefined: false,
  useGlobal: true,
  prompt: '\u001b[45m\u001b[30m \ue74e \u001b[0m\u001b[35m\u001b[0m '
});
function initializeContext() {
  myRepl.prompt();

  myRepl.context.R = require('ramda');
  /**
   * in @file 'repl/node-repl/jsconfig.json'
   * {
   *    "compilerOptions": {
   *        "module": "commonjs",
   *        "target": "esnext"
   * }
   * /* ... */
  myRepl.context.$ = require('jquery');
  myRepl.context.R = require('ramda');
  myRepl.context.F = require('lodash/fp');
  myRepl.context.C = chalk;
  myRepl.context.dom = '';
  myRepl.context.domRaw = '';
  myRepl.context.puppeteer = puppeteer;
  myRepl.context.L = console.log;
  myRepl.context.E = console.error;
  myRepl.context.I = console.info;
  myRepl.context.dir = console.dir;
  /**
   * @param {string | Buffer | ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array} html
   */

  function setJSDOM(myURL) {
    log(0, myURL);
    let newURL = '';
    let myDomElements = {
      window: null,
      document: null,
      body: null
    };
    try {
      if (myURL.toUpperCase().indexOf('HTTP') === -1) {
        try {
          newURL = 'https://' + myURL;
          setDomFromURL(newURL, myDomElements);
        } catch (error) {
          newURL = 'http://' + myURL;
          setDomFromURL(newURL, myDomElements);
        }
      } else {
        setDomFromURL(myURL, myDomElements);
      }
    } catch (error) {
      log(4, myURL);
      log(error.message);
    }
  }

  myRepl.context.JSDOM = JSDOM;
  myRepl.context.setJSDOM = setJSDOM;

  /**
   * @param {number} yourNumber
   */
  // @ts-ignore
  myRepl.context.toHex = yourNumber =>
    log(
      chalk.cyan.bold(
        `0x${Math.round(yourNumber)
          .toString(16)
          .toUpperCase()}`
      )
    );
  /**
   * @param {string} hexString
   */
  myRepl.context.fromHex = hexString => parseInt(hexString, 16);
}
initializeContext();
myRepl.on('reset', initializeContext);
// @ts-ignore
console.log(chalk.yellow.bold(`Node ${process.version}`));
myRepl.prompt();
console.log(chalk.green(`Node ${path.resolve()}`));
myRepl.prompt();

exports = { myRepl };
function setDomFromURL(myURL) {
  // log(myURL);
  puppetUrl(myURL)
    .then(res => {
      myRepl.context.dom = new JSDOM(res.data.toString());
      myRepl.context.domRaw = 3e3; // res.data;
      myRepl.context.body = myRepl.context.dom.window.document.body || null;
      myRepl.context.document = myRepl.context.dom.window.document || null;
      myRepl.context.window = myRepl.context.dom.window || null;
      log(myRepl.context.dom.window.document.location.toString());
    })
    .catch(e => {
      throw e;
    });
}
// setJSDOM('google.com')
// setJSDOM('https://www.barchart.com/stocks/most-active/daily-volume-leaders?viewName=main&screener=price_gt_10&orderBy=percentChange&orderDir=desc')
// let mySymbList = []
// sym = window.document.querySelectorAll('.symbol div span a')
// symb = sym.forEach(itWill=>mySymbList.push(itWill.innerText))

const puppetUrl = async myUrl => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(myUrl);
  await page.screenshot({ path: 'example.png' });
  await browser.close();
};
