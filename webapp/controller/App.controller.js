sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("buscacnpj.ui5.controller.App", {

			onInit: function() {

			let tilesModel = new JSONModel("./model/tiles.json");
			this.getView().setModel(tilesModel, "tiles");
		},

		onPress: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(`${oEvent}`)
		}

	});
});