/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"offlineApp/offlineApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});