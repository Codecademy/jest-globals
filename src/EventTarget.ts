import { fn } from './mocks';

export const createMockEventTarget = (
  overrides?: Partial<jest.Mocked<EventTarget>>
) => ({
  addEventListener: fn<MediaQueryList['addEventListener']>(),
  dispatchEvent: fn<MediaQueryList['dispatchEvent']>(),
  removeEventListener: fn<MediaQueryList['removeEventListener']>(),
  ...overrides,
});
