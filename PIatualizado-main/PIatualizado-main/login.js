const formularioLogin = document.querySelector("form");

const IemailLogin = document.querySelector(".email");
const IsenhaLogin = document.querySelector(".senha");


function cadastrarLogin () {

    fetch("",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: IemailLogin.value,
                senha: IsenhaLogin.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) {console.log(res) })    
};

function limparLogin () {
    IemailLogin.value = "";
    IsenhaLogin.value = "";
};

formularioLogin.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrarLogin();
    limparLogin();

});