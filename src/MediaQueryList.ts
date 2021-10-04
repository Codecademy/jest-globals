import { fn } from "./mocks";

export const createMockMediaQueryList = (
  overrides?: Partial<jest.Mocked<MediaQueryList>>
): jest.Mocked<MediaQueryList> => ({
  addListener: fn<MediaQueryList["addListener"]>(),
  addEventListener: fn<MediaQueryList["addEventListener"]>(),
  dispatchEvent: fn<MediaQueryList["dispatchEvent"]>(),
  matches: false,
  media: "",
  onchange: fn<NonNullable<MediaQueryList["onchange"]>>(),
  removeListener: fn<MediaQueryList["removeListener"]>(),
  removeEventListener: fn<MediaQueryList["removeEventListener"]>(),
  ...overrides,
});
