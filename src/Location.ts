import { fn } from './mocks';

export const createMockLocation = () => {
  const mockLocation = {
    assign: fn<Location['assign']>((url) => {
      const currentUrl = new URL(window.location.href);
      const newUrl = new URL(url);
      if (!newUrl.host) {
        newUrl.host = currentUrl.host;
        newUrl.protocol = currentUrl.protocol;
      }

      mockLocation.href = newUrl.toString();
      mockLocation.host = newUrl.host;
      mockLocation.origin = `${newUrl.protocol}://${newUrl.host}`;
      mockLocation.pathname = newUrl.pathname;
      mockLocation.search = newUrl.search;
    }),
    href: '',
    host: '',
    origin: '',
    pathname: '',
    search: '',
    reload: fn<Location['reload']>(),
  };

  return mockLocation;
};

export type MockLocation = ReturnType<typeof createMockLocation>;
