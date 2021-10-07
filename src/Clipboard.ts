import { fn } from "./mocks";

export const createMockClipboard = () => ({
  read: fn<Clipboard["read"]>(),
  readText: fn<Clipboard["readText"]>(),
  write: fn<Clipboard["write"]>(),
  writeText: fn<Clipboard["writeText"]>(),
});
