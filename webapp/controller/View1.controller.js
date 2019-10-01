sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.Deloitte.Deloitte_My_approval_inbox.controller.View1", {
		onInit: function () {

		},
			handleSwitchOrientation: function(oEvent) {
			var sOrientation = this.byId("mySplitContainer").getOrientation();
			if (sOrientation === "Vertical") {
				sOrientation = "Horizontal";
			} else {
				sOrientation = "Vertical";
			}
			this.byId("mySplitContainer").setOrientation(sOrientation);
		},

		handleToggleSecondaryContent: function(oEvent) {
			var oSplitContainer = this.byId("mySplitContainer");
			oSplitContainer.setShowSecondaryContent(!oSplitContainer.getShowSecondaryContent());
		}
	});
});