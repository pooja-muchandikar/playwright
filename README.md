# Playwright
Used Framewrok
1. Playwright https://playwright.dev/


## Install
`npm init`

`npm install -D @playwright/test`

## Alternative Installation Steps
`npx playwright install`

`npx playwright install-deps`(system dependancies get's automatically installed and useful for CI environments)

## Run Command
`npx playwright test`

## Run in headed(interactive) mode
`npx playwright test -- --headed`

## Run a single test case
`npx playwright test <file-name>`

## To check debug log
`npx playwright test -- --debug`

## To check test results in HTML Report
`npx playwright test -- --reporter=html`

## To view the HTML Report
`npx playwright show-report`
