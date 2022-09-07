const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    reporter: [['playwright-tesults-reporter', {'tesults-target': process.env.TESULTS_TOKEN
}]]
};

module.exports = config;