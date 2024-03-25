const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;


function validaNome(nomeCompleto) {
   const nomeComoArray = nomeCompleto.split( ' ');
   return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();



const numeroConta = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;



if (formEValido) {
    const contMensagemSucesso = document.querySelector('.sucess-message');
    contMensagemSucesso.innerHTML = mensagemSucesso;
    contMensagemSucesso.style.display = 'block';

    nomeBeneficiario.value = ' ';
    numeroConta.value = ' ';
    valorDeposito.value = ' ';
} 
else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
}
})

nomeBeneficiario.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value); 


if (!formEValido) {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
} 
else {
    nomeBeneficiario.style.border = 'none';
    document.querySelector('.error-message').style.display = 'none';
}
});
    
