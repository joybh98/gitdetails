import fetch from 'node-fetch';
import { load } from 'cheerio';

//const url = 'http://webcode.me';

const url = 'https://github.com/joybh98';

const response = await fetch(url);
const body = await response.text();

let $ = load(body);

let username=$(".vcard-names");
console.log(username.text());
