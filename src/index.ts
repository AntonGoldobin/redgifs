const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

let options = new chrome.Options();
// Below arguments are critical for Heroku deployment
options.addArguments("--no-sandbox");
options.addArguments("--disable-infobars");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--headless");
options.addArguments("--disable-gpu");

const Redgifs = class {
	getRedgifsVideo(url: string): Promise<string> {
		return new Promise(async (resolve, reject) => {
			const driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();

			await driver.get(url);
			await driver
				.wait(webdriver.until.elementLocated(webdriver.By.css("video source:first-child")), 20000)
				.then((el: any) => {
					setTimeout(() => {
						driver.quit();
					}, 100);
					resolve(el.getAttribute("src"));
				})
				.catch((err: string) => {
					reject(err);
				});
		});
	}
};

module.exports = Redgifs;
