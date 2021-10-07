import { createMockLocation, MockLocation } from "./Location";
import { createMockMediaQueryList } from "./MediaQueryList";
import { fn, Mock } from "./mocks";
import { MockNavigator, mockNavigator } from "./Navigator";
import { createMockPerformance, MockPerformance } from "./Performance";
import { MockStorage } from "./Storage";

export interface MockWindowMembers {
  addEventListener: Mock<typeof addEventListener>;
  alert: Mock<typeof alert>;
  blur: Mock<typeof blur>;
  close: Mock<typeof close>;
  confirm: Mock<typeof confirm>;
  dispatchEvent: Mock<typeof dispatchEvent>;
  focus: Mock<typeof focus>;
  getSelection: Mock<typeof getSelection>;
  localStorage: MockStorage;
  location: MockLocation;
  matchMedia: Mock<typeof matchMedia>;
  moveBy: Mock<typeof moveBy>;
  navigator: MockNavigator;
  open: Mock<typeof open>;
  performance: MockPerformance;
  postMessage: Mock<typeof postMessage>;
  print: Mock<typeof print>;
  prompt: Mock<typeof prompt>;
  removeEventListener: Mock<typeof removeEventListener>;
  requestAnimationFrame: Mock<typeof requestAnimationFrame>;
  requestIdleCallback: Mock<typeof requestIdleCallback>;
  resizeBy: Mock<typeof resizeBy>;
  resizeTo: Mock<typeof resizeTo>;
  scrollBy: Mock<typeof scrollBy>;
  scrollTo: Mock<typeof scrollTo>;
  sessionStorage: MockStorage;
  setImmediate: Mock<typeof setImmediate>;
  stop: Mock<typeof stop>;
  top: MockWindowMembers;
}

export class MockWindow implements MockWindowMembers {
  addEventListener = fn<typeof addEventListener>();
  alert = fn<typeof alert>();
  blur = fn<typeof blur>();
  close = fn<typeof close>();
  confirm = fn<typeof confirm>();
  dispatchEvent = fn<typeof dispatchEvent>();
  focus = fn<typeof focus>();
  getSelection = fn<typeof getSelection>();
  localStorage = new MockStorage();
  location = createMockLocation();
  matchMedia = fn<typeof matchMedia>().mockReturnValue(
    createMockMediaQueryList()
  );
  moveBy = fn<typeof moveBy>();
  navigator = mockNavigator;
  open = fn<typeof open>();
  performance = createMockPerformance();
  postMessage = fn<typeof postMessage>();
  print = fn<typeof print>();
  prompt = fn<typeof prompt>();
  removeEventListener = fn<typeof removeEventListener>();
  requestAnimationFrame = fn<typeof requestAnimationFrame>();
  requestIdleCallback = fn<typeof requestIdleCallback>();
  resizeBy = fn<typeof resizeBy>();
  resizeTo = fn<typeof resizeTo>();
  scrollBy = fn<typeof scrollBy>();
  scrollTo = fn<typeof scrollTo>();
  sessionStorage = new MockStorage();
  setImmediate = fn<typeof setImmediate>();
  stop = fn<typeof stop>();
  top: MockWindow;

  constructor(settings: Partial<MockWindowMembers> = {}) {
    Object.assign(this, settings);
    this.top ??= this;
  }
}
