require('dotenv').config();
const { test, expect } = require('@playwright/test');

const userId = 2;
const firstName = 'Janet';
const lastName = 'Weaver';
const userEmail = 'janet.weaver@reqres.in';
const nonExistingUserId = 4300;

test.describe('API Test - List Users', () => {
    test('should validate the API response for a list of users', async ({ request }) => {
        const response = await request.get(`${process.env.web1}/api/users?page=2`);
        const responseBody = await response.json();
    
        // Assertions on the response
        expect(response.status()).toBe(200);
    
        // Validate the 'page', 'total', and 'total_pages' properties
        expect(responseBody.page).toBeGreaterThan(0);
        expect(responseBody.total).toBeGreaterThan(0);
        expect(responseBody.total_pages).toBeGreaterThan(0);
    
        // Validate the 'data' array
        expect(responseBody.data).toBeDefined();
        expect(Array.isArray(responseBody.data)).toBe(true);
        expect(responseBody.data.length).toBeGreaterThan(0);
    
        // Validate each object in the 'data' array for each user
        for (const user of responseBody.data) {
          const expectedKeys = ['id', 'email', 'first_name', 'last_name', 'avatar'];
          const userKeys = Object.keys(user);
          
          // Check that the user object has all the expected keys
          for (const key of expectedKeys) {
            expect(userKeys).toContain(key);
          }
    
          expect(typeof user.id).toBe('number');
          expect(typeof user.email).toBe('string');
          expect(typeof user.first_name).toBe('string');
          expect(typeof user.last_name).toBe('string');
          expect(typeof user.avatar).toBe('string');
        }
  });

  test('should return the correct user information', async ({ request }) => {
    const response = await request.get(`${process.env.web1}/api/users/${userId}`);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.data.email).toBe(userEmail);
    expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
    expect(responseBody.data.id).toBe(userId);
    expect(responseBody.data.first_name).toBe(firstName);
    expect(responseBody.data.last_name).toBe(lastName);
  });

  test('should return a 404 error for a non-existing user', async ({ request }) => {
    const response = await request.get(`${process.env.web1}/api/users/${nonExistingUserId}`, {
      failOnStatusCode: false
    });

    expect(response.status()).toBe(404);
  });
});
