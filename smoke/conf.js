var AllureReporter = require('jasmine-allure-reporter');
var fs = require('fs');

function removeAllureResult(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch (e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        removeAllureResult(filePath);
    }
  fs.rmdirSync(dirPath);
};

exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

  //chrome_incognito
  //capabilities: { 'browserName': 'chrome', 'chromeOptions': { 'args': ['incognito'] } },

  //chrome

  capabilities: {
    browserName: 'chrome',
    count: '1',
    chromeOptions: {
      args: [
        "--window-size=1366,768",
        "--headless",
        "--no-sandbox",
        // "--disable-infobars", // https://stackoverflow.com/a/43840128/1689770
        // "--disable-dev-shm-usage", // https://stackoverflow.com/a/50725918/1689770
        // "--disable-browser-side-navigation", // https://stackoverflow.com/a/49123152/1689770
        // "--disable-gpu", // https://stackoverflow.com/questions/51959986/how-to-solve-selenium-chromedriver-timed-out-receiving-message-from-renderer-exc
        // "--disable-features=VizDisplayCompositor"  // https://stackoverflow.com/a/55371396/491553
      ]
    }

  },


  //Firefox

  // capabilities: {
  //   browserName: 'firefox',
  //   'moz:firefoxOptions': {
  //     args: ["--headless"]
  //   }

  // },


  onPrepare: function () {

    // removeAllureResult('./allure-results');

    // VideoReporter.prototype.jasmineStarted = function() {
    //   var self = this;
    //   if (self.options.singleVideo) {
    //     var videoPath = path.join(self.options.baseDirectory, 'protractor-specs.avi');

    //     self._startScreencast(videoPath);

    //     if (self.options.createSubtitles) {
    //       self._subtitles = [];
    //       self._jasmineStartTime = new Date();
    //     }
    //   }
    // }; 

    // jasmine.getEnv().addReporter(new VideoReporter({
    //       baseDirectory: path.normalize(path.join(__dirname, '../testresults/videos/')),
    //       createSubtitles: true,
    //       singleVideo: true,
    //       ffmpegCmd: path.normalize('./node_modules/ffmpeg-binaries/bin/ffmpeg.exe'),
    //       ffmpegArgs: [
    //           '-f', 'gdigrab',
    //           '-framerate', '24',
    //           '-video_size', 'wsxga',
    //           '-i', 'desktop',
    //           '-q:v','10',
    //       ]
    //     }));



    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })


    });




  }

};