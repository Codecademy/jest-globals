import { MockWindow } from "./Window";

export const globals = new MockWindow({
  top: new MockWindow(),
});

for (const [key, value] of Object.entries(globals)) {
  Object.defineProperty(globalThis, key, { value });

  if (typeof window !== "undefined") {
    Object.defineProperty(window, key, { value });
  }
}

export const {
  addEventListener,
  alert,
  blur,
  close,
  confirm,
  dispatchEvent,
  focus,
  getSelection,
  localStorage,
  location,
  matchMedia,
  moveBy,
  navigator,
  open,
  performance,
  postMessage,
  print,
  prompt,
  removeEventListener,
  requestAnimationFrame,
  requestIdleCallback,
  resizeBy,
  resizeTo,
  scrollBy,
  scrollTo,
  sessionStorage,
  setImmediate,
  stop,
  top,
} = globals;

export { MockStorage } from "./Storage";
export { MockWindow } from "./Window";
