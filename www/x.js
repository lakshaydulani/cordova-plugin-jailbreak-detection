
var exec = require("cordova/exec");

var x = function () {
    this.name = "x";
};

x.prototype.xs = function (successCallback, failureCallback) {
    exec(successCallback, failureCallback, "x", "xs", []);
};

module.exports = new x();
