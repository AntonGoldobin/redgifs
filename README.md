
# Redgifs

The library getting videofile's url by redgifs page. 
You have to put an page's url and the library will return a link to .mp4 file

!IMPORTANT!

For using the library on Heroku you should to add the current buildpacks:

```
$ heroku buildpacks:add --index 1 https://github.com/heroku/heroku-buildpack-chromedriver
$ heroku buildpacks:add --index 2 https://github.com/heroku/heroku-buildpack-google-chrome
```

## Installation
```
$ npm i redgifs
```
## Usage
```
const Redgifs = require("redgifs");

const r = new Redgifs();

r.getRedgifsVideo("https://www.redgifs.com/watch/decisivebestbettong")
	.then((videoFileUrl) => console.log(videoFileUrl))
	.catch(console.log);
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
