var jasmineFailFast = require('jasmine-fail-fast');

var JasmineFailFastReporter = function () {
    this.onRunStart = function (browsers) {
        jasmineFailFast.init();
    };
};

module.exports = {
    'reporter:jasmine-fail-fast': ['type', JasmineFailFastReporter]
};
