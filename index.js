import fetch from 'node-fetch';

const response = await fetch('https://memegen-link-examples-upleveled.netlify.app/');
const body = await response.text(); // convert to string
const imgSrc = body.split( 'src' );
console.log(imgSrc);


