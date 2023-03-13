## Description
Cypress tests written using cucumber and typescript. These tests are ran against the perlego.com website. The Test cases are as follow:

1. Navigate to our Search page. Notice different filters on the Search page. Validate that basic filter combinations return at least 5 pages of results. Try to keep filter selection and input as random as possible.

2. Sign up. Store new credentials. Then log in and create a workspace. Payment can be bypassed by clicking on the Perlego logo.

3. Password reset

## Setup
Install Node.js (version LTS recommended) from https://nodejs.org

Then run the following command in the root folder:
```sh
npm install
```

## Commands
After the packages have installed successfully run any of the following commands.

### `npm cy:open`
This command opens the Cypress UI in order to execute individual feature files or inspect the browser.

### `npm cy:test`
This command runs all tests in the console. Used in CI or to quickly execute all feature files.

