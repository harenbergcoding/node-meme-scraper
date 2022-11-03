import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { mkdir } from 'fs';
import fetch from 'node-fetch';

const imageUrls = [];
const imageUrlFirst10 = [];

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app',
);
// converts html body into string
const body = await response.text();

// loads string into cherio
const $ = cheerio.load(body);

// fetches image urls and saves them into the array
$('img', body).each(function () {
  const images = $(this).attr('src');

  imageUrls.push(images);
});

// gets first ten image urls
for (let i = 0; i < 10; i++) {
  imageUrlFirst10.push(imageUrls[i]);
}

// Defined path end
const pathEnd = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

// create non existing path
const path = `./memes/${pathEnd}.jpg`;

// Creates /memes folder
fs.mkdir('./memes', { recursive: true }, (err) => {
  if (err) throw err;
});

// Download url to folder

// fs.createWriteStream(imageUrlFirst10[0]);

// fs.writeFile(
//   'c:/Users/haren/projects/node-meme-scraper/memes/01.jpg',
//   imageUrlFirst10[0],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/02.jpg',
//   imageUrlFirst10[1],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/03.jpg',
//   imageUrlFirst10[2],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/04.jpg',
//   imageUrlFirst10[3],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/05.jpg',
//   imageUrlFirst10[4],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/06.jpg',
//   imageUrlFirst10[5],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/07.jpg',
//   imageUrlFirst10[6],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/08.jpg',
//   imageUrlFirst10[7],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/09.jpg',
//   imageUrlFirst10[8],
// );
// fs.writeFileSync(
//   'c:/Users/haren/projects/node-meme-scraper/memes/10.jpg',
//   imageUrlFirst10[9],
// );

// const imgfetch = await fetch(
//   'https://api.memegen.link/images/xy/all_the_things!!!.jpg?width=300',
// );
