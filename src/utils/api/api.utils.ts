import { StringMap } from '../../types/index';
import { iterateObject, ns } from '../object/object.utils';

export function createUrl(
  url: string,
  queryParams?: StringMap<string>,
): string {
  return `${ns(() => window.env.config.apiPath, '')}/${url}${createQueryParams(
    queryParams,
  )}`;
}

export function createQueryParams(queryParams: StringMap<string> = {}): string {
  let result: string = '';
  iterateObject(queryParams, (value, key, index) => {
    if (index === 0) {
      result += '?';
    } else {
      result += '&';
    }
    result += `${key}=${value}`;
  });
  return result;
}
