const Redgifs = require("./index.js");

const redgif = new Redgifs();
redgif
	.getRedgifsVideo("https://www.redgifs.com/watch/decisivebestbettong")
	.then((url) => console.log(url))
	.catch(console.log);
