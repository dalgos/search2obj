const s2o = require('./index');

test('location.search convert object', () => {
  expect(s2o('?userType=admin&seq=1')).toEqual({ userType: 'admin', seq: '1' });
})
