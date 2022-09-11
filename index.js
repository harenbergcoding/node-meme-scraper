import * as cheerio from 'cheerio';
import * as fs from 'fs';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app',
);
const body = await response.text(); // convert url to string
console.log(body);

const $ = cheerio.load(body); // load string into cherio

const imageUrl = []; // outside of the funtion otherwise you get each array for every url

$('img', body).each(function () {
  // copy img src into one array
  const image = $(this).attr('src');
  imageUrl.push(image);
});

// console.log(imageUrl); => output one array

const imageUrlFirst10 = [];

for (let i = 0; i < 10; i++) {
  imageUrlFirst10.push(imageUrl[i]);
}

// console.log(imageUrlFirstTen); output one array with first ten img src

fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/01.jpg',
  imageUrlFirst10[0],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/02.jpg',
  imageUrlFirst10[1],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/03.jpg',
  imageUrlFirst10[2],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/04.jpg',
  imageUrlFirst10[3],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/05.jpg',
  imageUrlFirst10[4],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/06.jpg',
  imageUrlFirst10[5],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/07.jpg',
  imageUrlFirst10[6],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/08.jpg',
  imageUrlFirst10[7],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/09.jpg',
  imageUrlFirst10[8],
);
fs.writeFileSync(
  'c:/Users/haren/projects/node-meme-scraper/memes/10.jpg',
  imageUrlFirst10[9],
);
