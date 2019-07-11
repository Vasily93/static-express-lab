const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('has a home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });

  // it('returns  array of colors', () => {
  //   return request(app)
  //     .get('/api/v1/colors')
  //     .then(res => {
  //       expect(res.text).toEqual(expect.Array());
  //     });
  // });
});
