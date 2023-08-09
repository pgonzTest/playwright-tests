# Playwright API Testing Demo

This repository contains a demo of API testing using Playwright. The tests are designed to showcase how to interact with REST APIs using Playwright's testing capabilities.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js installed (at least version 14)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:


   git clone https://github.com/pgonzTest/playwright-tests.git


2. Navigate to the project folder:


   cd playwright-tests


3. Install the project dependencies using npm:


   npm install


### Configuration

1. Create a `.env` file in the project root and set up your environment variables:


   # .env
   web1=https://reqres.in
   web2=https://fakerestapi.azurewebsites.net


   Adjust the values of `web1` and `web2` as needed to match your API endpoints.

### Running the Tests

To run the tests, use the following command:


npx playwright test


The tests will be executed using Playwright's test runner and the Chromium browser.

## Test Descriptions

### Create User Test

This test demonstrates how to create a user using a POST request to an API. The environment variables set in the `.env` file determine the API URLs.

### Get Users Test

This test demonstrates how to retrieve a list of users using a GET request to an API. The environment variables set in the `.env` file determine the API URLs.

### Update Activity Data Test

This test demonstrates how to update activity data using a PUT request to an API. The environment variables set in the `.env` file determine the API URLs.

## Test Debugging

During test execution, `console.log` statements provide information about request, response, and environment variables. These can be useful for debugging or understanding the test flow.

## Contributions

Feel free to contribute by reporting issues, suggesting enhancements, or creating pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
