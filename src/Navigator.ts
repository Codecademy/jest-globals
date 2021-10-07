import { createMockClipboard } from "./Clipboard";
import { fn } from "./mocks";

export const createMockNavigator = () => {
  const mockNavigator = {
    clipboard: createMockClipboard(),
    mockUserAgent: fn<() => string>(),
    platform: "",
    sendBeacon: fn<Navigator["sendBeacon"]>(),
    serviceWorker: {
      addEventListener: fn<ServiceWorkerContainer["addEventListener"]>(),
      getRegistration: fn<ServiceWorkerContainer["getRegistration"]>(),
      getRegistrations: fn<ServiceWorkerContainer["getRegistrations"]>(),
      register: fn<ServiceWorkerContainer["register"]>(),
      removeEventListener: fn<ServiceWorkerContainer["removeEventListener"]>(),
      startMessages: fn<ServiceWorkerContainer["startMessages"]>(),
    },
    get userAgent() {
      return mockNavigator.mockUserAgent() || "";
    },
    set userAgent(userAgent: string) {
      mockNavigator.mockUserAgent.mockReturnValue(userAgent);
    },
  };
  return mockNavigator;
};

export type MockNavigator = ReturnType<typeof createMockNavigator>;
