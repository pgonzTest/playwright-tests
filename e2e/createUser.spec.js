require('dotenv').config();
const { test, expect } = require('@playwright/test');

const firstName = 'John';
const lastName = 'Doe';

test.describe('Create User API Test', () => {
  test('should create a user and validate the response', async ({ request }) => {

    const response = await request.post(`${process.env.web1}/api/users?name=${firstName}+${lastName}&job=leader`);

    const responseBody = await response.json();

    // Log the response body
    console.log('Response Body:', JSON.stringify(responseBody));

    // Verify the status code is 201
    expect(response.status()).toBe(201);

    // Verify the response body
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');

    // Validate the date format of createdAt field (ISO 8601 format)
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    expect(responseBody.createdAt).toMatch(dateRegex);

  });
});
