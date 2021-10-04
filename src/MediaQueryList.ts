import { createMockEventTarget } from './EventTarget';
import { fn } from './mocks';

export const createMockMediaQueryList = <
  Overrides extends Partial<jest.Mocked<MediaQueryList>>
>(
  overrides?: Overrides
): jest.Mocked<MediaQueryList> & Overrides => ({
  addListener: fn<MediaQueryList['addListener']>(),
  matches: false,
  media: '',
  onchange: fn<MediaQueryList['onchange']>(),
  removeListener: fn<MediaQueryList['removeListener']>(),
  ...createMockEventTarget(),
  ...overrides,
});
