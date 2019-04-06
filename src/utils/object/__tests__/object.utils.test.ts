import {
  getValueByKeyIndex,
  isEmptyObject,
  isNotEmptyObject,
  iterateObject,
  mapObject,
  ns,
  objectLength,
} from '../object.utils';

describe('object utils', () => {
  describe('ns', () => {
    it('returns correct value if all objects are defined', () => {
      const nestedObject = {
        user: { name: { value: 'test' } },
      };
      expect(ns(() => nestedObject.user.name.value)).toEqual('test');
    });
    it('returns null value by default, if it fails to resolve a correct value', () => {
      const nestedObject = {
        user: { name: null },
      };
      // @ts-ignore
      expect(ns(() => nestedObject.user.name.value)).toEqual(null);
    });
    it('returns fallback value if it fails to resolve a correct value', () => {
      const nestedObject = {
        user: { name: null },
      };
      // @ts-ignore
      expect(ns(() => nestedObject.user.name.value, 'fallback')).toEqual(
        'fallback',
      );
    });
  });
  describe('objectLength', () => {
    it('returns length of 0 for null object', () => {
      expect(objectLength(null)).toEqual(0);
    });
    it('returns length of 0 for object without any keys', () => {
      expect(objectLength({})).toEqual(0);
    });
    it('returns correct object length', () => {
      const testObject = {
        firstKey: 'first_key',
        secondKey: 'second_key',
      };
      expect(objectLength(testObject)).toEqual(2);
    });
  });
  describe('mapObject', () => {
    it('returns empty array for undefined objects', () => {
      expect(mapObject({}, () => {})).toEqual([]);
      // @ts-ignore
      expect(mapObject(null, () => {})).toEqual([]);
    });
    it('maps object correctly', () => {
      const testObject = {
        firstKey: 'test1',
        secondKey: 'test2',
      };
      const expected = [
        {
          val: 'test1',
          key: 'firstKey',
          index: 0,
        },
        {
          val: 'test2',
          key: 'secondKey',
          index: 1,
        },
      ];
      expect(
        mapObject(testObject, (val, key, index) => ({
          val,
          key,
          index,
        })),
      ).toEqual(expected);
    });
  });
  describe('iterateObject', () => {
    it('iterates the object correctly', () => {
      const iterationFn = jest.fn();
      const testObject = {
        firstKey: 'test1',
        secondKey: 'test2',
      };
      iterateObject(testObject, iterationFn);
      expect(iterationFn).toHaveBeenCalledTimes(2);
      expect(iterationFn).toHaveBeenNthCalledWith(1, 'test1', 'firstKey', 0);
      expect(iterationFn).toHaveBeenNthCalledWith(2, 'test2', 'secondKey', 1);
    });
  });
  describe('isEmptyObject', () => {
    it('returns true for empty object', () => {
      expect(isEmptyObject(null)).toEqual(true);
      expect(isEmptyObject({})).toEqual(true);
      expect(isNotEmptyObject(null)).toEqual(false);
      expect(isNotEmptyObject({})).toEqual(false);
    });
    it('returns false for object with keys', () => {
      expect(isEmptyObject({ key: 1 })).toEqual(false);
      expect(isNotEmptyObject({ key: 1 })).toEqual(true);
    });
  });
  describe('getValueByKeyIndex', () => {
    it('returns null if index is out of bounds', () => {
      const testObject = {
        key1: 1,
        key2: 2,
        key3: 3,
      };
      expect(getValueByKeyIndex(testObject, 4)).toEqual(null);
    });
    it('returns correct value', () => {
      const testObject = {
        key1: 1,
        key2: 2,
        key3: 3,
      };
      expect(getValueByKeyIndex(testObject, 1)).toEqual(testObject['key2']);
    });
  });
});
