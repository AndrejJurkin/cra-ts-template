declare global {
  interface Window {
    env: any;
  }
}

export type ObjectMap<K extends keyof any, T> = { [P in K]: T };

export type StringMap<T> = { [key: string]: T };

export type Nullable<T> = T | null | undefined;
