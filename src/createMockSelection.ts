import { fn } from "./mocks";

export const createMockSelection = (
  overrides?: Partial<jest.Mocked<Selection>>
): jest.Mocked<Selection> => ({
  addRange: fn<Selection["addRange"]>(),
  anchorNode: null,
  anchorOffset: 0,
  collapse: fn<Selection["collapse"]>(),
  collapseToEnd: fn<Selection["collapseToEnd"]>(),
  collapseToStart: fn<Selection["collapseToStart"]>(),
  containsNode: fn<Selection["containsNode"]>(),
  deleteFromDocument: fn<Selection["deleteFromDocument"]>(),
  empty: fn<Selection["empty"]>(),
  extend: fn<Selection["extend"]>(),
  focusNode: null,
  focusOffset: 0,
  getRangeAt: fn<Selection["getRangeAt"]>(),
  isCollapsed: false,
  rangeCount: 0,
  removeAllRanges: fn<Selection["removeAllRanges"]>(),
  removeRange: fn<Selection["removeRange"]>(),
  selectAllChildren: fn<Selection["selectAllChildren"]>(),
  setBaseAndExtent: fn<Selection["setBaseAndExtent"]>(),
  setPosition: fn<Selection["setPosition"]>(),
  toString: fn<Selection["toString"]>(),
  type: "",
  ...overrides,
});
