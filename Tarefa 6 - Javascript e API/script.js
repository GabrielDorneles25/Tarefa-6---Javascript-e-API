var pessoas = [];
var tabela = document.getElementById("tabela");

function salvar() {
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var telefone = document.querySelector('input[name="telefone"]').value;

    var pessoa = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    pessoas.push(pessoa);
    console.log(pessoas);
    tabela.insertAdjacentHTML("beforeend", "<tr><td>"+nome+"</td><td>"+email+"</td><td>"+telefone+"</td></tr>");
}

function sincronizar() {
    fetch('https://637be0c96f4024eac21a0d86.mockapi.io/Cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pessoas),
    })
    .then((response) => response.json())
    .then((data) => {
        alert('Success!');
        console.log('Success:', data);
    })
    .catch((error) => {
        alert('Error!');
        console.error('Error:', error);
    });
}