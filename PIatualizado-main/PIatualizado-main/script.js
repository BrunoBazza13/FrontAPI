const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".telefone");
const Ilogin = document.querySelector(".login");
const Isenha = document.querySelector(".senha");


function cadastrar() {
    fetch("http://localhost:8080/api/usuario/criarUsuario", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify({
            nome: Inome.value,
            cpf: Icpf.value,
            telefone: Itelefone.value,
            login: Ilogin.value,
            senha: Isenha.value
        })
    })
    .then(function (res) { 
        if (res.ok) {
            console.log("Usuário criado com sucesso!");
        } else {
            console.error("Erro ao criar usuário:", res.status);
        }
    })
    .catch(function (error) {
        console.error("Erro na requisição:", error);
    });
};

function limpar() {
    Inome.value = "";
    Icpf.value = "";
    Itelefone.value = "";
    Ilogin.value = "";
    Isenha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();

    limpar();
});

