const Redgifs = require("../src/index.ts");

test("Should return helloWorld", () => {
	const redgif = new Redgifs();
	redgif
		.getRedgifsVideo("https://www.redgifs.com/watch/decisivebestbettong")
		.then((url: string) => expect(url).toBe("https://thumbs2.redgifs.com/DecisiveBestBettong-mobile.mp4"))
		.catch(console.log);
});
