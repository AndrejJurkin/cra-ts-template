import { createQueryParams, createUrl } from '../api.utils';

describe('Api utils', () => {
  // Test createQueryParams
  describe('createQueryParams', () => {
    it('returns empty string if no query map is provided', () => {
      expect(createQueryParams()).toEqual('');
    });
    it('returns expected string for a single query param', () => {
      expect(createQueryParams({ testParam: 'test' })).toEqual(
        '?testParam=test',
      );
    });
    it('returns expected string for multiple query params', () => {
      expect(
        createQueryParams({ firstParam: 'first', secondParam: 'second' }),
      ).toEqual('?firstParam=first&secondParam=second');
    });
  });
  describe('createUrl', () => {
    it('creates a correct url withouth env config', () => {
      expect(createUrl('test/user', { testParam: 'test' })).toEqual(
        '/test/user?testParam=test',
      );
    });
    it('creates a correct url with env config', () => {
      // @ts-ignore
      global.env = { config: { apiPath: '/api/path' } };
      expect(createUrl('test/user', { testParam: 'test' })).toEqual(
        '/api/path/test/user?testParam=test',
      );
    });
  });
});
