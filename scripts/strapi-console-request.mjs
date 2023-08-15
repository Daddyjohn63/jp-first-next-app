//const url = 'http://localhost:1337/api/posts';
const url = 'http://127.0.0.1:1337/api/posts';
const response = await fetch(url);
const body = await response.json();
console.log(body);
