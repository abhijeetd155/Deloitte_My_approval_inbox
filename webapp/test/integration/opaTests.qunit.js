/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/Deloitte/Deloitte_My_approval_inbox/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});