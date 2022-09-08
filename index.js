import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const response = await fetch('https://memegen-link-examples-upleveled.netlify.app');
const body = await response.text(); // convert url to string
console.log(body);

const $ = cheerio.load(body); // load string into cherio

const imageUrl = []; // outside of the funtion otherwise you get each array for every url

$('img', body).each(function () { // copy img src into one array
  const image = $(this).attr('src');
  imageUrl.push(image);
});

// console.log(imageUrl); => output one array

const imageUrlFirst10 = [];

for (let i = 0; i < 10; i++) {
  imageUrlFirst10.push(imageUrl[i]);
}

// console.log(imageUrlFirstTen); output one array with first ten img src