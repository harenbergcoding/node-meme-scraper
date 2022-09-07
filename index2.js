import fetch from 'node-fetch';

const response = await fetch('https://memegen-link-examples-upleveled.netlify.app/');
const data = await response.json();

console.log(data);
