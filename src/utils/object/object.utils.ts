/**
 * @param obj @nullable
 * @returns {number} return number of keys within the object
 * or 0, if undefined or null
 */
import { Nullable, StringMap } from "../../types";

export function objectLength<T>(obj?: T): number {
  if (!obj) {
    return 0;
  }

  return Object.keys(obj).length;
}

/**
 * Map ObjectMap<string, Object> to object O
 * @param obj key, value pair object
 * @param mapper function that takes a value and maps it to a different type
 */
export function mapObject<T, O>(
  obj: StringMap<T>,
  mapper: (val: T, key: string, index: number) => O,
): Array<O> {
  if (!obj) {
    return [];
  }

  const result: Array<O> = [];

  Object.keys(obj).forEach((key, index) => {
    result.push(mapper(obj[key], key, index));
  });

  return result;
}

/**
 * Iterate over { key, value } map
 * @param obj @nullable object
 * @param forEach function that will be called with (value, key, _index) params
 */
export function iterateObject<T>(
  obj: StringMap<T>,
  forEach: (o: T, string, number) => void,
): void {
  if (!obj || Object.keys(obj).length === 0) {
    return;
  }

  Object.keys(obj).forEach((key, index) => {
    forEach(obj[key], key, index);
  });
}

/**
 * Check if @nullable object has keys
 * @param obj
 * @return true if object has keys or 0 if object is null or {}
 */
export function isNotEmptyObject<T>(obj: T) {
  return objectLength(obj) !== 0;
}

export function isEmptyObject<T>(obj: T) {
  return !isNotEmptyObject(obj);
}

export function getValueByKeyIndex<T>(
  obj: StringMap<T>,
  keyIndex: number,
): Nullable<T> {
  const keys = Object.keys(obj);
  if (isEmptyObject(obj) || keys.length < keyIndex + 1) {
    return null;
  }
  return obj[keys[keyIndex]];
}

/**
 * Get null safe value from object. If any of the values in the path
 * is undefined it will return a fallback value instead of throwing an error.
 *
 * Example: ns(() => user.params.value, 'fallback value')
 * this will return value if user params and value are defined or fallback if
 * any of the objects are null
 *
 * @param fn The function to get a value from object
 * @param fallback The fallback value if null safe fails
 */
export function ns(fn, fallback: any = null) {
  try {
    return fn() || fallback;
  } catch (e) {
    return fallback;
  }
}
