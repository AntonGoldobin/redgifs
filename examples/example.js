const Redgifs = require("../lib/index");

const r = new Redgifs();

r
	.getRedgifsVideo("https://www.redgifs.com/watch/decisivebestbettong")
	.then((videoFileUrl) => console.log(videoFileUrl))
	.catch(console.log);
