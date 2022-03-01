QUnit.config.autostart = false; 

sap.ui.require([
  "sap/ui/test/Opa5",
  "sap/ui/test/opaQunit",    
  "sap/ui/test/actions/EnterText",
  "sap/ui/test/actions/Press",  
  "sap/ui/test/matchers/PropertyStrictEquals",
  "sap/m/MessageToast",
], function(Opa5, opaTest, EnterText, Press, PropertyStrictEquals, MessageToast) {
  "use strict";

  Opa5.extendConfig({        
		viewNamespace: "view.App",
		autoWait : true    
  });

  var selecionarCNPJ = {
		controlType: "sap.m.Button",
    id: new RegExp("buttonCnpj"),
		actions: new Press(),   
		errorMessage: "O botão não foi encontrado",
    success : function () {   
      Opa5.assert.ok(true, "Botão Clicado - Seleção CNPJ Iniciada");
      Opa5.assert.ok(true, "Consulta Realizado com sucesso");
		}
	};

  QUnit.module("Test - OPA5", {
		beforeEach: function (assert) {
      assert.ok(true, "Inicio do Teste - OPA5");
		},
		afterEach: function (assert) {
			assert.ok(true, "Final do Teste - OPA5");
		}
	});

  opaTest("Pressionando o Botão", function(Given, When, Then) {
     
    Given.iStartMyAppInAFrame("../index.html");

		When.waitFor({
      id: new RegExp("inputCnpj"),
      actions: new EnterText({
				keepFocus: true,
        text: "12564060000116"
			}),
      success : function (aInputs) {
				Opa5.assert.ok(true, "Input encontrado pelo id e incluido cep no input: " + aInputs[0]);
			},
    });

    When.waitFor(selecionarCNPJ);

    Then.waitFor({
			id: new RegExp("buttonCnpj"),
			success : function (aButtons) {
				Opa5.assert.ok(true, "Botão Selecionar Encontrado: " + aButtons[0]);
			},
			errorMessage : "Não encontrou o botão com o id correspondente"
		});

    Then.waitFor({
			id: new RegExp("inputCnpj"),
			success : function (aInputs) {
				Opa5.assert.ok(true, "Input inputCnpj Encontrado: " + aInputs[0]);
			},
			errorMessage : "Não encontrou o botão com o id correspondente"
		});

    // Given = arrangements (Dado = arranjos)
    // When = actions (Quando = ações)
    // Then = assertions (Então = afirmações)

    // remove o iframe com o index.html 
    // new Opa5().iTeardownMyAppFrame();  
    
  });
 
  QUnit.start();
    
});
