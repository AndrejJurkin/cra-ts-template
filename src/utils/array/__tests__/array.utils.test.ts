import { chunk, toHashMap } from '../array.utils';

describe('Array utils', () => {
  describe('chunk', () => {
    it('returns empty array for undefined input', () => {
      // @ts-ignore
      expect(chunk(null, 5)).toEqual([]);
      expect(chunk([], 5)).toEqual([]);
    });
    describe('chunk data correctly', () => {
      const input = [1, 1, 2, 2];
      expect(chunk(input, 2)).toEqual([[1, 1], [2, 2]]);
      expect(chunk(input, 5)).toEqual([input]);
      expect(chunk(input, 3)).toEqual([[1, 1, 2], [2]]);
    });
  });
  describe('to hash map', () => {
    it('handles undefined inputs correctly', () => {
      // @ts-ignore
      expect(toHashMap(null, null)).toEqual({});
      // @ts-ignore
      expect(toHashMap([], null)).toEqual({});
      // @ts-ignore
      expect(toHashMap([1, 2], null)).toEqual({});
      // @ts-ignore
      expect(toHashMap([1, 2], 'wrong_key')).toEqual({});
    });
    it('converts array to hash map correctly', () => {
      const input = [
        {
          id: 'test_1',
          name: 'name_1',
        },
        {
          id: 'test_2',
          name: 'name_2',
        },
      ];
      const expectedOutput = {
        test_1: input[0],
        test_2: input[1],
      };
      expect(toHashMap(input, 'id')).toEqual(expectedOutput);
    });
  });
});
