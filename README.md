# 🎭 jest-globals

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-brightgreen.svg)
[![NPM version](https://badge.fury.io/js/jest-globals.svg)](http://badge.fury.io/js/jest-globals)
[![Join the chat at https://gitter.im/Codecademy/jest-globals](https://badges.gitter.im/Codecademy/jest-globals.svg)](https://gitter.im/Codecademy/jest-globals?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Mocks out global variables with Jest spies.

## Usage

`jest-globals` sets up a collection of global mocks such as `location` and `navigator` and assigns them to global variables on `globalThis`.
If a `typeof window !== undefined` then it will assign the same values to `window` as well.

Your source code can then still refer to global variables normally...

```ts
// Source file: ./example.ts
export function example() {
  window.location.assign("/path");
}
```

...and your test files can import and use their test versions, as long as `jest-globals` is imported before the code under test:

```ts
// Test file: ./example.test.ts
import { location } from "jest-globals";
import { example } from "./example";

describe("example", () => {
  it("assigns /path to location", () => {
    example();
    expect(location.assign).toHaveBeenCalledWith("/path");
  });
});
```

> See [#Custom Usage](#custom-usage) below for more details.

### Available Globals

For each global available, you can `import` it from `jest-globals` directly.

#### `addEventListener`

```ts
import { addEventListener } from "jest-globals";

expect(addEventListener).toHaveBeenCalledWith("load", expect.any(Function));
```

#### `alert`

```ts
import { alert } from "jest-globals";

expect(alert).toHaveBeenCalledWith(expect.any(Function));
```

#### `blur`

```ts
import { blur } from "jest-globals";

expect(blur).toHaveBeenCalledTimes(1);
```

#### `close`

```ts
import { close } from "jest-globals";

expect(close).toHaveBeenCalledTimes(1);
```

#### `confirm`

```ts
import { confirm } from "jest-globals";

expect(confirm).toHaveBeenCalledTimes(1);
```

#### `dispatchEvent`

```ts
import { dispatchEvent } from "jest-globals";

expect(dispatchEvent).toHaveBeenCalledTimes(1);
```

#### `focus`

```ts
import { focus } from "jest-globals";

expect(focus).toHaveBeenCalledTimes(1);
```

#### `getSelection`

Use `createMockSelection` to create a valid `Selection` with stub data for any field not explicitly provided.

```ts
import { createMockSelection, getSelection } from "jest-globals";

getSelection.mockReturnValue(
  createMockSelection({
    focusOffset: 2,
  })
);
```

#### `localStorage`

`localStorage` is assigned an instance of a `MockStorage` class of assigned items under an `items` `Map`.

```ts
import { localStorage } from "jest-globals";

localStorage.setItem("powerLevel", "9001");

expect(localStorage.setItem).toHaveBeenCalledWith("powerLevel", "9001");
expect(localStorage.items.getItem("powerLevel")).toEqual("9001");
```

> `MockStorage`'s `constructor` includes a `beforeEach(() => this.items.clear())`.

#### `location`

```ts
import { location } from "jest-globals";

expect(location.assign).toHaveBeenCalledWith("/path");
```

#### `matchMedia`

```ts
import { createMockMediaQueryList, matchMedia } from "jest-globals";

matchMedia.mockReturnValue(
  createMockMediaQueryList({
    //
  })
);
```

#### `moveBy`

```ts
import { moveBy } from "jest-globals";

expect(moveBy).toHaveBeenCalledWith(12, 34);
```

#### `navigator`

`navigator.userAgent` is a getter for a `mockUserAgent: jest.fn()` available on the object.

```ts
import { navigator } from "jest-globals";

navigator.mockUserAgent.mockReturnValue("Mozilla/123");
```

`navigator.clipboard` is a mock as well.

```ts
import { navigator } from "jest-globals";

navigator.clipboard.readText.mockResolvedValue("It's over 9,000!");
```

#### `open`

```ts
import { open } from "jest-globals";

expect(open).toHaveBeenCalledWith("https://hi.joshuakgoldberg.com");
```

#### `performance`

```ts
import { performance } from "jest-globals";

performance.now.mockReturnValue(9001);
```

#### `postMessage`

```ts
import { postMessage } from "jest-globals";

expect(postMessage).toHaveBeenCalledWith("Is anybody out there?", "*");
```

#### `print`

```ts
import { print } from "jest-globals";

expect(print).toHaveBeenCalledTimes(1);
```

#### `prompt`

```ts
import { prompt } from "jest-globals";

expect(prompt).toHaveBeenCalledWith("Hello my baby");
```

#### `removeEventListener`

```ts
import { removeEventListener } from "jest-globals";

expect(removeEventListener).toHaveBeenCalledWith(expect.any(Function));
```

#### `requestAnimationFrame`

```ts
import { requestAnimationFrame } from "jest-globals";

expect(requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));
```

#### `requestIdleCallback`

```ts
import { requestIdleCallback } from "jest-globals";

expect(requestIdleCallback).toHaveBeenCalledWith(expect.any(Function));
```

#### `resizeBy`

```ts
import { resizeBy } from "jest-globals";

expect(resizeBy).toHaveBeenCalledWith(12, 34);
```

#### `resizeTo`

```ts
import { resizeTo } from "jest-globals";

expect(resizeTo).toHaveBeenCalledWith(123, 456);
```

#### `scrollBy`

```ts
import { scrollBy } from "jest-globals";

expect(scrollBy).toHaveBeenCalledWith(12, 34);
```

#### `scrollTo`

```ts
import { scrollTo } from "jest-globals";

expect(scrollTo).toHaveBeenCalledWith(123, 456);
```

#### `sessionStorage`

`sessionStorage` is assigned an instance of a `MockStorage` class that keeps track of assigned items under an `items` member of type `Map<string, string>`:

```ts
import { sessionStorage } from "jest-globals";

sessionStorage.setItem("powerLevel", "9001");

expect(sessionStorage.setItem).toHaveBeenCalledWith("powerLevel", "9001");
expect(sessionStorage.items.getItem("powerLevel")).toEqual("9001");
```

> `MockStorage`'s `constructor` includes a `beforeEach(() => this.items.clear())`.

#### `setImmediate`

```ts
import { setImmediate } from "jest-globals";

expect(setImmediate).toHaveBeenCalledWith(expect.any(Function));
```

#### `stop`

```ts
import { stop } from "jest-globals";

expect(stop).toHaveBeenCalledTimes(1);
```

#### `top`

`window.top` is by default a reference to an identical mock window object, except its `.top` references itself.

```ts
import { top } from "jest-globals";

expect(top.postMessage).toHaveBeenCalledWith("I'll be back one day", "*");
```

### Strongly Typed Usage

`jest-globals` is written in TypeScript and generally type safe.
Imported objects from `jest-globals` are typed as having `jest.Mock`s for their functions with parameters and return types corresponding to their original mocks.

Global mocks that return complex original objects therefore require `mockReturnValue` and co. to be provided with objects that match up to the original type:

```ts
import { getSelection } from "jest-globals";

getSelection.mockReturnValue({
  focusOffset: 2,
});
// Error: Argument of type '{ focusOffset: number; }' is not assignable to parameter of type 'Selection'.
//   Type '{ focusOffset: number; }' is missing the following properties from type 'Selection': anchorNode, anchorOffset, focusNode, focusOffset, and 16 more.
```

Each of these APIs has a corresponding `createMock*` function exported by `jest-globals` that takes in a `Partial` of the returned type and fills in any missing fields:

```ts
import { createMockSelection, getSelection } from "jest-globals";

getSelection.mockReturnValue(
  createMockSelection({
    focusOffset: 2,
  })
);
```

### What's Not Provided

The following global members are complex enough that they warrant their own dedicated packages:

- `document`: [`jest-environment-jsdom`](https://www.npmjs.com/package/jest-environment-jsdom)
- `fetch`: [`fetch-mock`](https://www.npmjs.com/package/fetch-mock) / [`fetch-mock-jest`](https://www.npmjs.com/package/fetch-mock-jest)
- `getComputedStyle`: similar to `document`
- `XMLHTTPRequest`: use `fetch` instead 😄

## Custom Usage

### Auto-Sorted Involvement

If you'd like `jest-globals` to run after library code, it may be inconvenient to also have a linter plugin thatt auto-sorts your imports.

```ts
// example.test.js
import "jest-globals"; // runs first 😔
import userEvent from "@testing-library/user-event";
```

If your configuration puts imports under a prefix such as `~/` last, you can create a file whose sole purpose is to import `jest-globals`:

```ts
// tests/globals
export * from "jest-globals";
```

```ts
// example.test.js
import userEvent from "@testing-library/user-event";
import "~/tests/globals"; // runs last 😌
```

Another (less type safe) workaround is to use Jest's [`moduleNameMapper`](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring) to allow importing under a name like `zzzest-globals`, pushing it alphabetically below other absolute imports:

```json
{
  "moduleNameMapper": {
    "^zzzest-globals$": "jest-globals"
  }
}
```

```ts
// example.test.js
import userEvent from "@testing-library/user-event";
import "zzzest-globals"; // runs last 😌
```

### Permanent Involvement

If you'd like `jest-globals` to _always_ be run before all your files, you can include it in your [`setupFilesAfterEnv`](https://jestjs.io/docs/configuration#setupfilesafterenv-array):

```js
// ./jest.setup.js
require("jest-globals");
```

## Development

Requires:

- [Node.js](https://nodejs.org) >14
- [Yarn](https://yarnpkg.com/en)

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo):

```
git clone https://github.com/<your-name-here>/jest-globals
cd jest-globals
yarn
```

### Contribution Guidelines

We'd love to have you contribute!
Check the [issue tracker](https://github.com/Codecademy/jest-globals/issues) for issues labeled [`accepting prs`](https://github.com/Codecademy/jest-globals/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22accepting+prs%22) to find bug fixes and feature requests the community can work on.
If this is your first time working with this code, the [`good first issue`](https://github.com/Codecademy/jest-globals/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+) label indicates good introductory issues.

Please note that this project is released with a [Contributor Covenant](https://www.contributor-covenant.org).
By participating in this project you agree to abide by its terms.
See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
