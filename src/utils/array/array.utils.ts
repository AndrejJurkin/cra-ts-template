export function chunk<T>(array: Array<T>, size: number) {
  if (!array || !array.length) {
    return [];
  }

  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...chunk(tail, size)];
}

export function toHashMap<T>(array: Array<T>, key: string) {
  if (!array || !array.length || !key) {
    return {};
  }

  const result = {};

  array.forEach(obj => {
    if (obj[key]) {
      result[obj[key]] = obj;
    }
  });

  return result;
}
