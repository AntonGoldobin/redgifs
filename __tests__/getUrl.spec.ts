const Redgif = require("../src/index.ts");

test("Should return redgifs url", () => {
	const redgif = new Redgif();
	redgif
		.getRedgifsVideo("https://www.redgifs.com/watch/decisivebestbettong")
		.then((url: string) => expect(url).toBe("https://thumbs2.redgifs.com/DecisiveBestBettong-mobile.mp4"))
		.catch(console.log);
});
