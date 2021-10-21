import { fn } from "./mocks";

export const createMockServiceWorkerContainer = (
  overrides?: Partial<ServiceWorkerContainer>
) => ({
  addEventListener: fn<ServiceWorkerContainer["addEventListener"]>(),
  getRegistration: fn<ServiceWorkerContainer["getRegistration"]>(),
  getRegistrations: fn<ServiceWorkerContainer["getRegistrations"]>(),
  register: fn<ServiceWorkerContainer["register"]>(),
  removeEventListener: fn<ServiceWorkerContainer["removeEventListener"]>(),
  startMessages: fn<ServiceWorkerContainer["startMessages"]>(),
  ...overrides,
});

export type MockServiceWorkerContainer = ReturnType<
  typeof createMockServiceWorkerContainer
>;
