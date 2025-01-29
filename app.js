let amigosParticipantes = [];

function adicionarAmigo() {
    const amigoAdicionado = amigo.value; 

    if (amigoAdicionado) {
        amigosParticipantes.push(amigoAdicionado);
        atualizarLista();
        amigo.value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function atualizarLista() {
    const lista = amigosParticipantes;
    listaAmigos.textContent = lista;
}

atualizarLista();

function sortearAmigo() {
    if (amigosParticipantes.length === 0) {
        alert('A lista está vazia, adicione nomes antes de sortear.');
    } else {
        const sorteio = Math.floor(Math.random() * amigosParticipantes.length);
        const amigoSecreto = amigosParticipantes[sorteio];
        resultado.textContent = `O nome sorteado foi: ${amigoSecreto}!`
    }
}