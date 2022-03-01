sap.ui.define([], function() {
  "use strict";

	QUnit.module("Async - Ajax Mock Test", {
		beforeEach: function (assert) {
      assert.ok(true, "Inicio do Teste");
		},
		afterEach: function (assert) {
			assert.ok(true, "Final do Teste");
		}
	});
  
  QUnit.test("Async - Ajax Test", function(assert) {
    var done = assert.async(1);
    
    var cnpj = "12.564.060/0001-16";
    var dados = {
        "abertura": "16/09/2010",
        "atividade_principal": [
          {
            "code": "82.11-3-00",
            "text": "Serviços combinados de escritório e apoio administrativo"
          }
        ],
        "atividades_secundarias": [
          {
            "code": "85.99-6-04",
            "text": "Treinamento em desenvolvimento profissional e gerencial"
          }
        ],
        "bairro": "CENTRO",
        "billing": {
          "database": true,
          "free": true
        },
        "capital_social": "10000.00",
        "cep": "15.015-300",
        "cnpj": "12.564.060/0001-16",
        "complemento": "CONJ 12 SALA 02",
        "data_situacao": "16/09/2010",
        "data_situacao_especial": "",
        "efr": "",
        "email": "dp.financeiro@palinemartins.com.br",
        "extra": {},
        "fantasia": "PALIN & MARTINS",
        "logradouro": "R BERNARDINO DE CAMPOS",
        "motivo_situacao": "",
        "municipio": "SAO JOSE DO RIO PRETO",
        "natureza_juridica": "206-2 - Sociedade Empresária Limitada",
        "nome": "PALIN & MARTINS ORGANIZACAO TRIBUTARIA LTDA",
        "numero": "3522",
        "porte": "MICRO EMPRESA",
        "qsa": [
          {
            "nome": "ALTAIR HEITOR MARTINS PALIN",
            "qual": "49-Sócio-Administrador"
          },
          {
            "nome": "HEITOR PALIN MARTINS",
            "nome_rep_legal": "JESSICA PALIN MORAES MARTINS",
            "qual": "30-Sócio ou Acionista Menor (Assistido/Representado)",
            "qual_rep_legal": "14-Mãe"
          },
          {
            "nome": "JESSICA PALIN MORAES MARTINS",
            "qual": "05-Administrador"
          }
        ],
        "situacao": "ATIVA",
        "situacao_especial": "",
        "status": "OK",
        "telefone": "(17) 3301-2564/ (17) 3022-5408",
        "tipo": "MATRIZ",
        "uf": "SP",
        "ultima_atualizacao": "2021-11-07T09:28:23.296Z"    
    };

    $.ajax({
      url: "https://www.receitaws.com.br/v1/cnpj/" + cnpj.replace(/[^0-9]/g, ''),
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        assert.ok(data ? true : false, "Dados Carregados")
        assert.deepEqual(data, dados, "Dados Iguais")
      },
      error: function (err) {
        console.log('err: ', err);
        assert.throws(function(err) {
          throw "Erro";
        }, dados, JSON.stringify(err));
      },
      complete: function() {
        done();
      }    
    })    

  });

});
