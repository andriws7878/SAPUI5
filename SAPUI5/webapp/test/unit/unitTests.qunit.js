// @ts-nocheck
/* eslint-disable no-undef */
/** global  QUnit*/
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use sctrict"

    sap.ui.require([
        "andriws/SAPUI5/test/unit/AllTests"
    ], function () {
        QUnit.start();
    });
});