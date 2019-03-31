const fs = require('fs');

const targetPath = `./src/environments/environment.ts`;
const sassTargetPath = `./src/theme/_variables.scss`;
const testTargetPath = `./e2e/test-environment.js`;

// Show variables during construction
console.log(
  `Using environment variable PRODUCTION with value ${
    process.env.PRODUCTION
  }. If undefined, default value false will be used.`
);
console.log(
  `Using environment variable API_BASE_URL with value ${
    process.env.API_BASE_URL
  }`
);
console.log(
  `Using sass variable $primary-color with value ${
    process.env.PRIMARY_COLOR
  }. If undefined, default value #3F51B5 will be used.`
);
console.log(
  `Using sass variable $accent-color with value ${
    process.env.ACCENT_COLOR
  }. If undefined, default value #E91E63 will be used.`
);
console.log(
  `Using sass variable $warn-color with value ${
    process.env.WARN_COLOR
  }. If undefined, default value #F44336 will be used.`
);
console.log(
  `Using environment variable CI_MODE with value ${
    process.env.CI_MODE
  }. If undefined, default value false will be used.`
);

const envConfigFile = `
export const environment = {
  production: ${process.env.PRODUCTION ? process.env.PRODUCTION : false},
  API_BASE_URL: '${process.env.API_BASE_URL}',
};

export const VERSION = '0.0.0';
`;

const sassFile = `
$primary-color: ${
  process.env.PRIMARY_COLOR ? process.env.PRIMARY_COLOR : '#3F51B5'
};
$accent-color: ${
  process.env.ACCENT_COLOR ? process.env.ACCENT_COLOR : '#E91E63'
};
$warn-color: ${process.env.WARN_COLOR ? process.env.WARN_COLOR : '#F44336'};
`;

const testEnvFile = `
exports.config = {
  CI_MODE: ${process.env.CI_MODE ? process.env.CI_MODE : false}
};
`;

// Write environment file
fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});

// Write SASS variables file
fs.writeFile(sassTargetPath, sassFile, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`Sass output generated at ${sassTargetPath}`);
});

// Write test environment file
fs.writeFile(testTargetPath, testEnvFile, function(err) {
  if (err) {
    console.log(err);
  }
  
  console.log(`Test environment file successfully written at ${testTargetPath}`);
});
