"use strict";
var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
require("chromedriver");
var options = new chrome.Options();
// Below arguments are critical for Heroku deployment
options.addArguments("--no-sandbox");
options.addArguments("--disable-infobars");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--headless");
options.addArguments("--disable-gpu");
var Redgifs = /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.getRedgifsVideo = function (url) {
        return new Promise(function (resolve, reject) {
            var driver = new webdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();
            driver.get(url);
            driver
                .wait(webdriver.until.elementLocated(webdriver.By.css("video source:first-child")), 20000)
                .then(function (el) {
                setTimeout(function () {
                    driver.quit();
                }, 100);
                resolve(el.getAttribute("src"));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return class_1;
}());
module.exports = Redgifs;
//# sourceMappingURL=index.js.map