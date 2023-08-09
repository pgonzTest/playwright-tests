require('dotenv').config();
const { test, expect } = require('@playwright/test');

test.describe('Update Activity Data', () => {
  test('should update activity data', async ({ request }) => {
    const id = 1;
    const data = {
      id: 0,
      title: 'string',
      dueDate: "2023-09-11T05:47:20.709Z",
      completed: false
    };

    const response = await request.put(`${process.env.web2}/api/v1/Activities/${id}`, {
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log('Response Status:', response.status());
    console.log('Response Body:', await response.text());

    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());

    // Additional assertions on the response body
    expect(responseBody.id).toBe(data.id);
    expect(responseBody.title).toBe(data.title);
    expect(responseBody.dueDate).toBe(data.dueDate);
    expect(responseBody.completed).toBe(data.completed);
  });
});


