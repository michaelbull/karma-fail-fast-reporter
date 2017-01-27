var FailFastReporter = function () {
    this.onSpecComplete = function (browser, result) {
        if (result.success === false) {
            throw new Error(result.log);
        }
    }
};

module.exports = {
    'reporter:fail-fast': ['type', FailFastReporter]
};
