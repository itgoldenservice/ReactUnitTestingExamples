const fetchData = require("./PostService");

describe('Post', () => {
    test('Promises- it should fetch post', () => {
        return fetchData().then(data => {
            expect(data.length).toBeGreaterThan(1);
          });
        });

    test('it should fetch post', () => {
        return expect(fetchData()).resolves.toBeDefined();
    });

    test('the data is peanut butter', async () => {
        const data = await fetchData();
        expect(data.length).toBeGreaterThan(1);
      });
    
})