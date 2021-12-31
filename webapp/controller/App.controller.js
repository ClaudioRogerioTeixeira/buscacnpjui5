sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("buscacnpj.ui5.controller.App", {

			onInit: function() {

			let tilesModel = new JSONModel("./model/tiles.json");
			this.getView().setModel(tilesModel, "tiles");
		},

		onPress: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(`${oEvent}`)
		},

		consultaCnpj: function(oEvent) {
			MessageToast.show('Consulta CNPJ');
		}

	});
});