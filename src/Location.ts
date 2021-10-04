import Uri from "jsuri";

import { fn } from "./mocks";

export const createMockLocation = () => {
  const mockLocation = {
    assign: jest.fn((url) => {
      const currentUri = new Uri(window.location.href);
      const newUri = new Uri(url);
      if (!newUri.host()) {
        newUri.setProtocol(currentUri.protocol());
        newUri.setHost(currentUri.host());
      }

      mockLocation.href = newUri.toString();
      mockLocation.host = newUri.host();
      mockLocation.origin = `${newUri.protocol()}://${newUri.host()}`;
      mockLocation.pathname = newUri.path();
      mockLocation.search = newUri.query();
    }),
    href: "",
    host: "",
    origin: "",
    pathname: "",
    search: "",
    reload: fn<Location["reload"]>(),
  };

  return mockLocation;
};

export type MockLocation = ReturnType<typeof createMockLocation>;
