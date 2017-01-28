# karma-fail-fast-reporter

Report [Karma][karma] failures as soon as they occur, exiting and reporting the
the first failure instead of waiting for all of the tests to run.

[![license][license-badge]][license]
[![npm version][npm-badge]][npm]
[![npm downloads][downloads-badge]][downloads]
[![dependencies status][dependencies-badge]][dependencies]
[![devDependencies status][devDependencies-badge]][devDependencies]
[![peerDependencies status][peerDependencies-badge]][peerDependencies]

Multiple test failures can often be the result of a single piece of erroneous
code, therefore it is not always necessary to run and produce the results of
every single test.

Failing fast is an important concept of the Agile software development
methodology as it allows the learning process to begin as early as possible,
providing the shortest feedback loop available for the developer to begin fixing
a failing test.

> The quicker you can find out if a change breaks something the better off you
> are and the more confidence you will have in your software.
>
> &mdash; <cite>[Mark Chang][model-everything-fail-fast]</cite>

## Installation

```
npm install --save-dev karma-fail-fast-reporter
```

## Configuration

Either pass the `fail-fast` reporter as a command line argument:

```
karma start --reporters fail-fast
```

Or add the reporter to your `karma.conf.js` file:

```javascript
// karma.conf.js
module.exports = function (config) {
  config.set({
    reporters: ['fail-fast']
  });
};
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`][license] file for the copyright information and licensing terms.

[license-badge]: https://img.shields.io/github/license/MikeBull94/karma-fail-fast-reporter.svg?style=flat-square
[license]: https://github.com/MikeBull94/karma-fail-fast-reporter/blob/master/LICENSE
[npm-badge]: https://img.shields.io/npm/v/karma-fail-fast-reporter.svg?style=flat-square
[npm]: https://www.npmjs.com/package/karma-fail-fast-reporter
[downloads-badge]: https://img.shields.io/npm/dt/karma-fail-fast-reporter.svg?style=flat-square
[downloads]: https://www.npmjs.com/package/karma-fail-fast-reporter
[dependencies-badge]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter.svg?style=flat-square
[dependencies]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter
[devDependencies-badge]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter/dev-status.svg?style=flat-square
[devDependencies]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter?type=dev
[peerDependencies-badge]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter/peer-status.svg?style=flat-square
[peerDependencies]: https://david-dm.org/MikeBull94/karma-fail-fast-reporter?type=peer
[karma]: https://karma-runner.github.io
[model-everything-fail-fast]: https://www.thoughtworks.com/insights/blog/model-everything-fail-fast
[github]: https://github.com/MikeBull94/karma-fail-fast-reporter
