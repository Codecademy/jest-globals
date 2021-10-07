import { createMockClipboard } from "./Clipboard";
import { fn } from "./mocks";

export const mockNavigator = {
  clipboard: createMockClipboard(),
  mockUserAgent: fn<() => string>(),
  sendBeacon: fn<Navigator["sendBeacon"]>(),
  get userAgent() {
    return mockNavigator.mockUserAgent() || "";
  },
  set userAgent(userAgent: string) {
    mockNavigator.mockUserAgent.mockReturnValue(userAgent);
  },
  platform: "",
};

export type MockNavigator = typeof mockNavigator;
