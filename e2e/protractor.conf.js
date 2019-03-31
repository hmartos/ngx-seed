// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
const environment = require("./test-environment");

// Chrome options
const chromeOptions = environment.config.CI_MODE
  ? ["--headless", "--no-sandbox", "--disable-gpu", "--window-size=1366,768"]
  : ["--start-fullscreen", "--start-maximized", "--no-sandbox"];

// Spec reporter
const specReporter = new SpecReporter({
  spec: {
    displayStacktrace: true
  }
});

// Timestamp for reports name
const dateTime = new Date().toISOString().replace(/:/g, "-");

// Screenshot reporter configuration
// https://github.com/mlison/protractor-jasmine2-screenshot-reporter
const htmlScreenshotReporter = new HtmlScreenshotReporter({
  dest: `./e2e/reports/test-reports/report-${dateTime}/`,
  filename: `report.html`,
  userCss: "./e2e/reports/styles/report-styles.css",
  reportFailedUrl: true
});

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/main/main.e2e-spec.ts',
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: chromeOptions
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
  },
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      htmlScreenshotReporter.beforeLaunch(resolve);
    });
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json'),
    });
    // Spec reporter
    jasmine.getEnv().addReporter(specReporter);
    // Screenshot reporter
    jasmine.getEnv().addReporter(htmlScreenshotReporter);
  },
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      htmlScreenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
