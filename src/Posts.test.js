// users.test.js
import axios from 'axios';
import Posts from './Posts';

jest.mock('axios');

describe('Posts', () => {
  test('should fetch users', () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
    ];
    const resp = { data: posts };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return new Posts().getPosts().then((data) => expect(data).toEqual(posts));
  });
});
