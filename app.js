var totalAtividades = document.getElementById('total-atividades');
var totalCalorias = document.getElementById('total-calorias');
var nomePerfil = document.getElementById('nome-perfil');
var botaoCriar = document.getElementById('botao-criar-atividade');
var botaoAuth = document.getElementById('botao-autenticacao');

var botoesFiltro = document.querySelectorAll('.botao-filtro');

totalAtividades.textContent = '67';
totalCalorias.textContent = '23';
nomePerfil.textContent = 'Os menininhos do SENAI';

botaoCriar.disabled = false;

// botaoAuth.classList.add('ativo');

//elemento.addEventListener('click', function() {
     // codigo que roda quando click
//})

botaoAuth.addEventListener('click', function() {
    abrirModal()
})

botaoCriar.addEventListener('click', function() {
    console.log("O botão criar foi clicado");
})

botoesFiltro.forEach(function (botao) {
    botao.addEventListener('click', function() {
        var tipo = botao.getAttribute('data-tipo')
        console.log('Filtro clicado: ', tipo);
    });
});

var modalHTML = '' +
    '<div id="modal-login" class="modal-overlay" style="display: none;">' +
        '<div class="modal-conteudo">' +
            '<span id="fechar-modal" class="fechar-modal">&#10007</span>' +
            '<h2>Login</h2>' +
            '<form id="form-login">' +
                '<label for="email">E-mail</label>' +
                '<input type="email" id="email" placeholder="Digite o seu e-mail">' +
                '<span id="erro-email" class="erro-msg"></span>' +
'' +
                '<label for="senha">Senha</label>' +
                '<input type="password" id="senha" placeholder="Digite a sua senha">' +
                '<span id="erro-senha" class="erro-msg"></span>' +
'' +
                '<div class="botoes-modal">' +
                    '<button type="button" id="btn-cancelar">Cancelar</button>' +
                    '<button type="submit" id="btn-login">Login</button>' +
                '</div>' +
            '</form>' +
        '</div>' +
    '</div>';

document.body.insertAdjacentHTML('beforeend', modalHTML);

console.log("Modal criado");

function abrirModal(){
    document.getElementById('modal-login').style.display = 'flex';
}

function fecharModal(){
    document.getElementById('modal-login').style.display = 'none';
}

document.getElementById('fechar-modal').addEventListener('click', fecharModal);
document.getElementById('btn-cancelar').addEventListener('click', fecharModal);




