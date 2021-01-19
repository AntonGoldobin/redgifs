import * as webdriver from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import("chromedriver");

const options: chrome.Options = new chrome.Options();
// Below arguments are critical for Heroku deployment
options.addArguments("--no-sandbox");
options.addArguments("--disable-infobars");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--headless");
options.addArguments("--disable-gpu");

const Redgifs = class {
	getRedgifsVideo(url: string) {
		return new Promise((resolve, reject) => {
			const driver = new webdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();

			driver.get(url);
			driver
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