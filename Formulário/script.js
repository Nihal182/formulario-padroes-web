/*VALIDANDO O CADASTRO*/
function validaCadastro () {
    if (validaChassi() == true && validaUf() == true && validaGravame() == true && validaCpf() == true && validaNome() == true && validaUfDevedor () == true && validaLogradouro() == true && validaMunicipio() == true && validaRestricao() == true && validaNumContrato() == true){
		window.alert("Cadastro Realizado com Sucesso");
         /*credor*/
         document.getElementById("valida_credor").innerHTML = "";
         /*uf*/
          document.getElementById("valida_uf").innerHTML = "";
         /*chassi*/
          document.getElementById("valida_chassi").innerHTML = "";
         /*gravame*/
          document.getElementById("valida_gravame").innerHTML = "";
          /*CPF*/
          document.getElementById("valida_cpf").innerHTML = "";
          /*NOME*/
          document.getElementById("valida_nome").innerHTML = "";
          /*UF DEVEDOR*/
          document.getElementById("valida_uf_devedor").innerHTML = "";
          /*LOGRADOURO*/
          document.getElementById("valida_logradouro").innerHTML = "";
          /*MUNICÍPIO*/
          document.getElementById("valida_municipio").innerHTML = "";
          /*TIPO RESTRIÇÃO*/
          document.getElementById("valida_restricao").innerHTML = "";
          /*NÚMERO DO CONTRATO*/
          document.getElementById("valida_num_contrato").innerHTML = "";
        }
    else {
        window.alert("Volte e revise os campos obrigatórios!");
       /*credor*/
        document.getElementById("valida_credor").innerHTML = "* Selecione um credor";
       /*uf*/
        document.getElementById("valida_uf").innerHTML = "*";
        document.querySelector("[name='uf']").placeholder = "Campo Obrigatório";
       /*chassi*/
        document.getElementById("valida_chassi").innerHTML = "*";
        document.querySelector("[name='chassi']").placeholder = "Campo Obrigatório";
       /*gravame*/
        document.getElementById("valida_gravame").innerHTML = "*";
        document.querySelector("[name='gravame']").placeholder = "Campo Obrigatório";
        /*CPF*/
        document.getElementById("valida_cpf").innerHTML = "*";
        document.querySelector("[name='cpf']").placeholder = "CPF Inválido";
        /*NOME*/
        document.getElementById("valida_nome").innerHTML = "*";
        document.querySelector("[name='nome']").placeholder = "Campo Obrigatório";
        /*UF DEVEDOR*/
        document.getElementById("valida_uf_devedor").innerHTML = "* Campo Obrigatório";
        /*LOGRADOURO*/
        document.getElementById("valida_logradouro").innerHTML = "*";
        document.querySelector("[name='logradouro']").placeholder = "Campo Obrigatório";
        /*MUNICÍPIO*/
        document.getElementById("valida_municipio").innerHTML = "*";
        document.querySelector("[name='municipio']").placeholder = "Campo Obrigatório";
        /*TIPO RESTRIÇÃO*/
        document.getElementById("valida_restricao").innerHTML = "* Campo Obrigatório";
        /*NÚMERO DO CONTRATO*/
        document.getElementById("valida_num_contrato").innerHTML = "*";
        document.querySelector("[name='numero-contrato']").placeholder = "Campo Obrigatório";
    }

}

/*VALIDANDO O CREDOR*/
function validaCredor(elemento) {
    resultado_credor = false;
    if(elemento.value == "") {
        document.getElementById("valida_credor").innerHTML = "* Selecione um credor";
        resultado_credor = false;
    }
    else {
        document.getElementById("valida_credor").innerHTML = "";
       resultado_credor = true;
    }
    return resultado_credor;
}


/*VALIDANDO A UF DE REGISTRO*/
function validaUf () {
    var uf = document.getElementById("uf").value;
    resultado_uf = false;

    if(uf == "DF" || uf == "df"){
        resultado_uf = true;
        document.getElementById("valida_uf").innerHTML = "";    
    }
    else if (uf == ""){
        resultado_uf = false;
        document.getElementById("valida_uf").innerHTML = "*";
        document.querySelector("[name='uf']").placeholder = "Campo Obrigatório";
        return;
    }
    else {
        resultado_uf = false;
        document.getElementById("uf").placeholder = "A UF de Registro precisa ser DF";
        document.getElementById("uf").value = "";
        document.getElementById("valida_uf").innerHTML = "*";
        return;
    }

    return resultado_uf;
}


/*VALIDANDO O NÚMERO DO CHASSI*/
function validaChassi() {
    var chassi = document.getElementById("chassi").value;
	var resultado_chassi = false;

	if (chassi.length == 17){
        resultado_chassi = true;
        chassi = chassi.toUpperCase();
        document.getElementById("valida_chassi").innerHTML = "";
    }
	else if (chassi == ""){
        resultado_chassi = false;
        document.getElementById("valida_chassi").innerHTML = "*";
        document.querySelector("[name='chassi']").placeholder = "Campo Obrigatório";
        return;
    }
    else {
        resultado_chassi = false;
        document.getElementById("valida_chassi").innerHTML = "*";
        document.getElementById("chassi").value = "";
        document.querySelector("[name='chassi']").placeholder = "Número do Chassi inválido";
        return;
    }

    return resultado_chassi;
}

/*VALIDANDO O NÚMERO DO GRAVAME*/
function validaGravame() {
    var gravame_var = document.getElementById("gravame");
    gravame_var.value = gravame_var.value.toUpperCase();
	var resultado_gravame = false;

	if (gravame_var.value.length == 7){
        resultado_gravame = true;
        document.getElementById("valida_gravame").innerHTML = "";
    }
	else if (gravame_var.value.length == 0){
        resultado_gravame = false;
        document.getElementById("valida_gravame").innerHTML = "*";
        document.querySelector("[name='gravame']").placeholder = "Campo Obrigatório";
        return;
    }
    else {
        resultado_gravame = false;
        document.getElementById("valida_gravame").innerHTML = "*";
        document.querySelector("[name='gravame']").placeholder = "Número do Gravame inválido";
        document.getElementById("gravame").value = "";
        return;
    }

    return resultado_gravame
}

/*VALIDAR DATA*/
function validaData(){
    var data = document.getElementById("data-gravame");
    resultado_data = false;
    
    if(data.value == ''){
        resultado_data = false;
        document.getElementById("valida_data").innerHTML = "* Data Inválida";
        return;
    }
    else {
        resultado_data = true;
        document.getElementById("valida_data").innerHTML = "";
    }
    return resultado_data;

}
/*TAXA DE MULTA*/
function taxaMulta(){
    var input_multa = document.querySelector("#taxa-multa");
    var indicativo_multa = document.querySelector("#indicativo-multa");

    if(indicativo_multa.checked == true){
        input_multa.disabled = false;
    }
    else if(indicativo_multa.checked == false){
        input_multa.disabled = true;
    }
}
/*TAXA DE MORA*/
function taxaMora(){
    var input_mora = document.querySelector("#taxa-mora");
    var indicativo_mora = document.querySelector("#indicativo-mora");

    if(indicativo_mora.checked == true){
        input_mora.disabled = false;
    }
    else if(indicativo_mora.checked == false){
        input_mora.disabled = true;
    }
}

/*CAMPO VEÍCULO 0KM*/
function veiculoZero() {
    var input_placa = document.querySelector("#placa");
    var input_uf = document.querySelector("#uf-placa");
    var input_renavam = document.querySelector("#renavam");
    var zero = document.querySelector("#zero");
    var resultado_zero = false;

    if (zero.checked == true) {
        input_placa.disabled = true;
        document.getElementById("valida_placa").innerHTML = "";
        document.querySelector("[name='placa']").placeholder = "";
        input_uf.disabled = true;
        document.getElementById("valida_uf_placa").innerHTML = "";
        document.querySelector("[name='uf-placa']").placeholder = "";
        input_renavam.disabled = true;
        document.getElementById("valida_renavam").innerHTML = "";
        document.querySelector("[name='renavam']").placeholder = "";
        resultado_zero = true;
    }
    else if (zero.checked == false) {
        input_placa.disabled = false;
        input_uf.disabled = false;
        input_renavam.disabled = false;
        resultado_zero = false;
    }
    return resultado_zero;
}

/*VALIDA PLACA*/
function validaPlaca() {
    var placa = document.getElementById("placa");
    resultado_placa = true;
    
    if (placa.value.length !== 7) {
        document.getElementById("valida_placa").innerHTML = "*";
        document.querySelector("[name='placa']").placeholder = "Placa Inválida";
        resultado_placa = false;
    }
    else{
        document.getElementById("valida_placa").innerHTML = "";
        document.querySelector("[name='placa']").placeholder = "";
        resultado_placa = true;
    }
    return resultado_placa;
}

/*VALIDA UF DA PLACA*/
function validaUfPlaca() {
    var uf_placa = document.getElementById("uf-placa");
    resultado_uf_placa = true;
    
    if (uf_placa.value == "") {
        document.getElementById("valida_uf_placa").innerHTML = "* Campo Obrigatório";
        resultado_uf_placa = false;
    }
    else {
        document.getElementById("valida_uf_placa").innerHTML = "";
        document.querySelector("[name='uf-placa']").placeholder = "";
        resultado_uf_placa = true;
    }
}

/*VALIDA RENAVAM*/
function validaRenavam(){
    var renavam = document.getElementById("renavam");
    resultado_renavam = true;

    if (renavam.value.length != 11 ) {
        document.getElementById("valida_renavam").innerHTML = "*";
        document.querySelector("[name='renavam']").placeholder = "Renavam Inválido";
        resultado_renavam = false;
    }
    else {
        document.getElementById("valida_renavam").innerHTML = "";
        document.querySelector("[name='renavam']").placeholder = "";
        resultado_renavam = true;
    }
}

/*ANO DE FABRICAÇÃO*/
function validaAnoFabr(){
    ano_fabricacao = document.getElementById("ano-fabricacao");
    var resultado_ano_fabr = false;

    if (ano_fabricacao.value.length == 0) {
        resultado_ano_fabr = false;
        document.getElementById("valida_ano_fabr").innerHTML = "*";
        document.querySelector("[name='ano-fabricacao']").placeholder = "Campo Obrigatório";
        return
    }

    else if (ano_fabricacao.value.length != 4) {
        resultado_ano_fabr = false;
        document.getElementById("valida_ano_fabr").innerHTML = "*";
        document.querySelector("[name='ano-fabricacao']").placeholder = "Ano Inválido";
        document.getElementById("ano-fabricacao").value = "";
    }
    else {
        resultado_ano_fabr = true;
        document.getElementById("valida_ano_fabr").innerHTML = "";
        document.querySelector("[name='ano-fabricacao']").placeholder = "";
    }
    return resultado_ano_fabr;
}

/*ANO DO MODELO*/
function validaAnoMod(){
    ano_modelo = document.getElementById("ano-modelo");
    resultado_ano_mod = false;

    if (ano_modelo.value.length == 0) {
        document.getElementById("valida_ano_mod").innerHTML = "*";
        document.querySelector("[name='ano-modelo']").placeholder = "Campo Obrigatório";
        resultado_ano_mod = false;
    }
    else if (ano_modelo.value.length != 4) {
        document.getElementById("valida_ano_mod").innerHTML = "*";
        document.querySelector("[name='ano-modelo']").placeholder = "Ano Inválido";
        document.getElementById("ano-modelo").value = "";
        resultado_ano_mod = false;
    }
    else {
        resultado_ano_mod = true;
        document.getElementById("valida_ano_mod").innerHTML = "";
        document.querySelector("[name='ano-mod']").placeholder = "";
    }
    return resultado_ano_mod;
}

/*CPF*/
function validaCpf(){
    var cpf = document.getElementById("cpf");
    resultado_cpf= true;

    if (cpf.value.length != 11 ) {
        document.getElementById("valida_cpf").innerHTML = "*";
        document.querySelector("[name='cpf']").placeholder = "CPF Inválido";
        resultado_cpf = false;
    }
    else {
        document.getElementById("valida_cpf").innerHTML = "";
        document.querySelector("[name='cpf']").placeholder = "";
        resultado_cpf = true;
    }
    return resultado_cpf;
}

/*NOME*/
function validaNome(){
    var nome = document.getElementById("nome").value;
    resultado_nome = true;

    if (nome == ""){
        resultado_nome = false;
        document.getElementById("valida_nome").innerHTML = "*";
        document.querySelector("[name='nome']").placeholder = "Campo Obrigatório";
    }
    else {
        document.getElementById("valida_nome").innerHTML = "";
    }
    return resultado_nome;
}

/*VALIDA UF DO DEVEDOR*/
function validaUfDevedor() {
    var uf_devedor = document.getElementById("uf-devedor");
    resultado_uf_devedor = true;
    
    if (uf_devedor.value == "") {
        document.getElementById("valida_uf_devedor").innerHTML = "* Campo Obrigatório";
        resultado_uf_devedor = false;
    }
    else {
        document.getElementById("valida_uf_devedor").innerHTML = "";
        document.querySelector("[name='uf-devedor']").placeholder = "";
        resultado_uf_devedor = true;
    }
    return resultado_uf_devedor;
}

/*LOGRADOURO*/
function validaLogradouro(){
    var logradouro = document.getElementById("logradouro").value;
    resultado_logradouro = true;

    if (logradouro == ""){
        document.getElementById("valida_logradouro").innerHTML = "*";
        document.querySelector("[name='logradouro']").placeholder = "Campo Obrigatório";
        resultado_logradouro = false;
    }
    else {
        document.getElementById("valida_logradouro").innerHTML = "";
        resultado_logradouro = true;
    }
    return resultado_logradouro;
}

/*MUNICÍPIO*/
function validaMunicipio(){
    var municipio = document.getElementById("municipio").value;
    resultado_municipio = true;

    if (municipio == ""){
        resultado_municipio = false;
        document.getElementById("valida_municipio").innerHTML = "*";
        document.querySelector("[name='municipio']").placeholder = "Campo Obrigatório";
    }
    else {
        document.getElementById("valida_municipio").innerHTML = "";
        resultado_logradouro = true;
    }
    return resultado_municipio;
}

/*TIPO DE RESTRIÇÃO*/
function validaRestricao() {
    var restricao = document.getElementById("tipo-restricao");
    resultado_restricao = true;
    
    if (restricao.value == "") {
        document.getElementById("valida_restricao").innerHTML = "* Campo Obrigatório";
        resultado_uf_devedor = false;
    }
    else {
        document.getElementById("valida_restricao").innerHTML = "";
        document.querySelector("[name='tipo-restricao']").placeholder = "";
        resultado_restricao = true;
    }
    return resultado_restricao;
}

/*NÚMERO DO CONTRATO*/
function validaNumContrato(){
    var numero = document.getElementById("numero-contrato").value;
    resultado_numero = true;

    if (numero == ""){
        resultado_numero = false;
        document.getElementById("valida_num_contrato").innerHTML = "*";
        document.querySelector("[name='numero-contrato']").placeholder = "Campo Obrigatório";
    }
    else {
        document.getElementById("valida_num_contrato").innerHTML = "";
        resultado_numero = true;
    }
    return resultado_numero;
}