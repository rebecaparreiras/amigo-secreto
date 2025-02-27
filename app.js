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
    let listaHTML = '';

    for (let i = 0; i < amigosParticipantes.length; i++) {
        const amigos = amigosParticipantes[i];
        const html = `<li>${amigos}</li>`;

        listaHTML += html;
    }

    document.querySelector('.name-list').innerHTML = listaHTML;
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