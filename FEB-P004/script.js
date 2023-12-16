function capturarInformacoes(destino, idaVolta, diarias, cafeManha, preco, taxas, parcelamento) {

    const card = document.querySelector('.card');
    const header = card.querySelector('header h3').innerText;
    const listaItens = card.querySelectorAll('ul li');
    const precoInfo = card.querySelector('div h2').innerText;
    const taxasInfo = card.querySelector('div span:nth-child(1)').innerText;
    const parcelamentoInfo = card.querySelector('div span:nth-child(2)').innerText;


    const pacoteTuristico = {
        destino: header,
        aereoIdaVolta: listaItens[0].innerText,
        diarias: listaItens[1].innerText,
        cafeManha: listaItens[2].innerText,
        preco: precoInfo,
        taxas: taxasInfo,
        parcelamento: parcelamentoInfo,
    };


    console.log(JSON.stringify(pacoteTuristico));
}
