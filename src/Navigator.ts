import { createMockClipboard } from "./Clipboard";
import { fn } from "./mocks";
import { createMockServiceWorkerContainer, MockServiceWorker } from "./ServiceWorkerContainer";

export const createMockNavigator = () => ({
  clipboard: createMockClipboard(),
  userAgent: '' as string | undefined,
  serviceWorker: createMockServiceWorkerContainer() as MockServiceWorker | undefined,
  platform: "",
  sendBeacon: fn<Navigator["sendBeacon"]>(),
});

export type MockNavigator = ReturnType<typeof createMockNavigator>;
