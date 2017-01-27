# karma-fail-fast-reporter

Report [Karma][karma] failures as soon as they occur, exiting and reporting the
the first failure instead of waiting for all of the tests to run.

Multiple test failures can often be the result of one piece of erroneous code,
therefore it is not always necessary to run every and produce the results of
every single test. Instead, we can fail immediately and begin to investigate
what caused the failure.

>  The quicker you can find out if a change breaks something the better off you
> are and the more confidence you will have in your software.
>
> &mdash; <cite>[Mark Chang][model-everything-fail-fast]</cite>

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`][license] file for the copyright information and licensing terms.

[karma]: https://karma-runner.github.io
[model-everything-fail-fast]: https://www.thoughtworks.com/insights/blog/model-everything-fail-fast
[github]: https://github.com/MikeBull94/karma-fail-fast-reporter
[license]: https://github.com/MikeBull94/karma-fail-fast-reporter/blob/master/LICENSE
