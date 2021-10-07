import { fn } from "./mocks";

export const createMockPerformance = () => ({
  clearMarks: fn<Performance["clearMarks"]>(),
  clearMeasures: fn<Performance["clearMeasures"]>(),
  clearResourceTimings: fn<Performance["clearResourceTimings"]>(),
  getEntries: fn<Performance["getEntries"]>(),
  getEntriesByName: fn<Performance["getEntriesByName"]>(),
  getEntriesByType: fn<Performance["getEntriesByType"]>(),
  mark: fn<Performance["mark"]>(),
  measure: fn<Performance["measure"]>(),
  now: fn<Performance["now"]>(),
  setResourceTimingBufferSize: fn<Performance["setResourceTimingBufferSize"]>(),
  toJSON: fn<Performance["toJSON"]>(),
});

export type MockPerformance = ReturnType<typeof createMockPerformance>;
