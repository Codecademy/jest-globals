import { fn } from './mocks';

export class MockStorage implements Storage {
  items = new Map<string, string>();

  clear = fn<Storage['clear']>(() => this.items.clear());

  getItem = fn<Storage['getItem']>((key) => this.items.get(key) ?? null);

  key = fn<Storage['key']>((index) => this.keys()[index]);

  keys = fn<Storage['keys']>(() => Array.from(this.items.keys()));

  removeItem = fn<Storage['removeItem']>((key) => this.items.delete(key));

  setItem = fn<Storage['setItem']>((key, value) => this.items.set(key, value));

  get length() {
    return this.keys().length;
  }

  constructor() {
    beforeEach(() => this.items.clear());
  }
}
