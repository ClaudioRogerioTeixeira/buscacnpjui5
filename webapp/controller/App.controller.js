sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("buscacnpj.ui5.controller.App", {

			onInit: function() {
			this.getView().byId("idIconTabBarNoIcons").setVisible(false);
		},

		consultaCnpj: function(oEvent) {
			this.getView().byId("idIconTabBarNoIcons").setVisible(true);
			var cnpj = this.getView().byId("inputCnpj").getValue().toString();			
			var url = '' + cnpj.replace(/[^0-9]/g, '');
			var that = this;
			jQuery.ajax({
				method: "GET",
				url: url,
				"dataType": "jsonp",
				success: function (response) {
					var oModel = new JSONModel(response);
					that.getView().setModel(oModel, "data");									
					MessageToast.show("Consulta efetuada com sucesso.");
					$(".sapMMessageToast").addClass("sapMMessageToastSuccess");
				},
				error: function(error) {
					MessageToast.show("Consulta não efetuada com sucesso.");
					$(".sapMMessageToast").addClass("sapMMessageToastDanger");
					that.onValueHelpRequest(oEvent);
				}
			})
		},

		onValueHelpRequest: function(oEvent) {
			this.getView().byId("idIconTabBarNoIcons").setVisible(false);
			this.getView().byId("inputCnpj").setValue("");		
		}

	});
});