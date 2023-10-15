/*VALIDANDO O CREDOR*/
function validaCredor(elemento) {
    if(elemento.value == "") {
        document.getElementById("valida_credor").innerHTML = "* Selecione um credor";
        return false;
    }
    else {
        document.getElementById("valida_credor").innerHTML = "";
        return true;
    }

}

/*VALIDANDO A UF DE REGISTRO*/
function validaUf () {
    var uf = document.getElementById("uf").value;
    resultado_uf = false;

    if(uf == "DF" || uf == "df"){
        resultado_uf = true;
        document.getElementsById("valida_uf").innerHTML = "";
        
    }
    else if (uf == ""){
        resultado_uf = false;
        document.getElementsById("valida_uf").innerHTML = "*";
        document.querySelector("[name='uf']").placeholder = "Campo Obrigatório";
        return;
    }
    else {
        resultado_uf = false;
        document.getElementById("uf").placeholder = "A UF de Registro precisa ser DF";
        document.getElementById("uf").value = "";
        document.getElementsById("valida_uf").innerHTML = "*";
        return;
    }

    return resultado_uf;
}

/*VALIDANDO O NÚMERO DO CHASSI*/
function validaChassi() {
    var chassi_var = document.getElementById("chassi");
    chassi_var.value = chassi_var.value.toUpperCase();
	var resultado_chassi = false;

	if (chassi_var.value.length == 17){
        document.getElementById("valida_chassi").innerHTML = "";
		resultado_chassi = true;
    }
	else if (chassi_var.value.length == 0){
        resultado_chassi = false;
        document.getElementById("valida_chassi").innerHTML = "*";
        document.querySelector("[name='chassi']").placeholder = "Campo Obrigatório";
        return;
    }
    else {
        resultado_chassi = false;
        document.getElementById("valida_chassi").innerHTML = "*";
        document.querySelector("[name='chassi']").placeholder = "Número do Chassi inválido";
        document.getElementById("chassi").value = "";
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

/*CAMPO VEÍCULO 0KM*/
function veiculoZero() {
    var input_placa = document.querySelector("#placa");
    var input_uf = document.querySelector("#uf-placa");
    var input_renavam = document.querySelector("#renavam");
    var zero = document.querySelector("#zero");
    var resultado_zero = false;

    if (zero.checked == true) {    
        input_placa.disabled = true;
        input_uf.disabled = true;
        input_renavam.disabled = true;
        resultado_zero = true;
    }
    else if (zero.checked == false) {

        validarVeiculo();

        input_placa.disabled = false;
        input_uf.disabled = false;
        input_renavam.disabled = false;
        resultado_zero = false;
    }
    return resultado_zero;
}

function validarVeiculo(){
    var placa = document.getElementById("placa");
    var uf_placa = document.getElementById("uf-placa");
    var renavam = document.getElementById("renavam");

    if (placa.value.lenght < 7 && placa.value.lenght > 7) {
        document.getElementById("valida_placa").innerHTML = "*";
        document.querySelector("[name='placa']").placeholder = "Placa Inválida";
    }
    if (renavam.value.lenght > 11 || renavam.value.lenght < 11) {
        document.getElementById("valida_renavam").innerHTML = "*";
        document.querySelector("[name='renavam']").placeholder = "Renavam Inválido";
    }
    if (uf_placa.value == "") {
        document.getElementsById("valida_uf_placa").innerHTML = "*Campo Obrigatório";
    }
        else {
            document.getElementById("valida_uf_placa").innerHTML = "";
        }

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