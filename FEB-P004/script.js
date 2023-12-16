function inserirDestino() {
    const form = document.getElementById('pacoteForm');

    const destino = form.destino.value;
    const idaVolta = form.idaVolta.value;
    const diarias = form.diarias.value;
    const cafeManha = form.cafeManha.value;
    const preco = form.preco.value;
    const taxas = form.taxas.value;
    const parcelamento = form.parcelamento.value;
    const imagem = form.imagem.value;

    const novoDestino = document.createElement('div');
    novoDestino.classList.add('card');

    novoDestino.innerHTML = `
        <header>
            <img src="${imagem}" alt="">
            <h3>${destino}</h3>
        </header>
        <main>
            <ul>
                <li>${idaVolta}</li>
                <li>${diarias}</li>
                <li>${cafeManha}</li>
            </ul>
            <div>
                <h2>${preco}</h2>
                <span>${taxas}</span>
                <span>${parcelamento}</span>
            </div>
        </main>
        <button class="buy-button">Comprar</button>
    `;

    document.querySelector('.container-destinos').appendChild(novoDestino);

    form.reset();
}
