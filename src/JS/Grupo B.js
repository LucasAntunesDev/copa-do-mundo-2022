$ = (id) => {
    return document.getElementById(id);
}

create = (create) => {
    return document.createElement(create);
}

function $$(classe) {
    return document.getElementsByClassName(classe);
}

const tabela = [
    {Time: 'Inglaterra', Pontos: '7', Jogos: '3',  Vitórias: '2', Empates: '1', Derrotas: '0',	GP: '9', GC: '2', Saldo: '7', Aproveitamento: '77%', Últimos: 'VEV', Imagem:'https://cdn.countryflags.com/thumbs/england/flag-round-250.png'},
    {Time: 'Estados Unidos', Pontos: '5', Jogos: '3',  Vitórias: '1', Empates: '2', Derrotas: '0',	GP: '2', GC: '1', Saldo: '1', Aproveitamento: '55%', Últimos: 'EEV', Imagem:'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png'},
    {Time: 'Irã', Pontos: '3', Jogos: '3',  Vitórias: '1', Empates: '0', Derrotas: '2',	GP: '4', GC: '7', Saldo: '-3', Aproveitamento: '33%', Últimos: 'DVD', Imagem:'https://cdn.countryflags.com/thumbs/iran/flag-round-250.png'},
    {Time: 'País de Gales', Pontos: '1', Jogos: '3',  Vitórias: '0', Empates: '1', Derrotas: '2',	GP: '1', GC: '6', Saldo: '-5', Aproveitamento: '11%', Últimos: 'EDD', Imagem:'https://cdn.countryflags.com/thumbs/wales/flag-round-250.png'},
];

const montarTabela = () => {
    
    const tbody = $('corpo');

    for (let i = 0; i < tabela.length; i++) {
        
        const tr = create('tr');

        for (let j = 0; j < 1; j++) {
            const td1 = create('td');
            const img = create('img');
            const div = create('div');
            const h4 = create('h4');
            div.setAttribute('class', 'flex flex-row justify-start items-center gap-2');
            img.setAttribute('src', tabela[i].Imagem);
            img.setAttribute('class', 'w-12 border-white border-2 rounded-full');
            h4.innerHTML = tabela[i].Time;
            div.appendChild(img);
            div.appendChild(h4);
            const td2 = create('td');
            td2.innerHTML = tabela[i].Pontos;
            const td3 = create('td');
            td3.innerHTML = tabela[i].Jogos;
            const td4 = create('td');
            td4.innerHTML = tabela[i].Vitórias;
            const td5 = create('td');
            td5.innerHTML = tabela[i].Empates;
            const td6 = create('td');
            td6.innerHTML = tabela[i].Derrotas;
            const td7 = create('td');
            td7.innerHTML = tabela[i].GP;
            const td8 = create('td');
            td8.innerHTML = tabela[i].GC;
            const td9 = create('td');
            td9.innerHTML = tabela[i].Saldo;
            const td10 = create('td');
            td10.innerHTML = tabela[i].Aproveitamento;
            const td11 = create('td');
            td11.innerHTML = tabela[i].Últimos;
            //Adicionando as td's como filhas
            td1.appendChild(div);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);
            tr.appendChild(td11);
            tr.setAttribute('class', 'hover:bg-pink-800 hover:text-yellow-500 cursor-pointer');
            tbody.appendChild(tr);

        }

    }
}

montarTabela();