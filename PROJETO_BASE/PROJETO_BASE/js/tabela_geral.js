let fii_user = [];
let fii_table = [];

async function carregarDadosUser(url){
    await fetch(url)
            .then(resp => resp.json())
            .then(json => fii_user = json);
    carregarDadosFundos();
    
}


async function carregarDadosFundos(){
    
    for (let fii of fii_user){
        let json = await fetch(`https://api-simple-flask.herokuapp.com/api/${fii.nome}`)
                        .then(resp => resp.json());
        fii_table.push(json);  
    }
     

    exibirTabela();
}

carregarDadosUser("json/fii.json");

function exibirTabela(){

    let limite_percentual = 0.6;
    let total_cotas = 0
    let total_investido = 0;
    let total_proventos = 0;
    let provento = 0;
    let data_base = 0;
    let data_pagamento = 0;
    let percentual;
    
    for(let fii of fii_user){
        let dados_fii = fii_table.find((item) => item.fundo.indexOf(fii.nome.toUpperCase()) >=0 );
        if(dados_fii.proximoRendimento.rendimento != "-"){
            provento = dados_fii.proximoRendimento.rendimento;
            data_base = dados_fii.proximoRendimento.dataBase;
            data_pagamento = dados_fii.proximoRendimento.dataPag;
        }else{
            provento = dados_fii.ultimoRendimento.rendimento;
            data_base = dados_fii.ultimoRendimento.dataBase;
            data_pagamento = dados_fii.ultimoRendimento.dataPag;
        }

        total_proventos += provento * fii.qtde;
        total_investido += fii.totalgasto;
        total_cotas += fii.qtde;
        percentual = (provento*100 / dados_fii.valorAtual).toFixed(2);
    }

    function fazTabela(){
        for(let i = 0;i <= fii_user.length;i++){
            if(fii_table[i].ultimoRendimento.rendimento>=limite_percentual){
                document.querySelector("table").innerHTML += `<tr class ="positivo"><td>${fii_user[i].nome.toUpperCase()}</td><td>${fii_table[i].setor}</td><td>${fii_table[i].ultimoRendimento.dataBase}</td><td>${fii_table[i].ultimoRendimento.dataPag}</td><td>R$ ${fii_table[i].ultimoRendimento.rendimento}</td><td>R$ ${fii_table[i].valorAtual}</td><td>${fii_user[i].qtde}</td><td>R$ ${fii_user[i].totalgasto}</td><td>R$ ${(fii_user[i].totalgasto/fii_user[i].qtde).toFixed(2)}</td><td>${fii_table[i].ultimoRendimento.rendimento}%</td><td>${fii_table[i].dividendYield}%</td><td>R$ ${fii_table[i].rendimentoMedio24M.toFixed(2)}</td></tr>`
            }else{
                document.querySelector("table").innerHTML += `<tr class ="negativo"><td>${fii_user[i].nome.toUpperCase()}</td><td>${fii_table[i].setor}</td><td>${fii_table[i].ultimoRendimento.dataBase}</td><td>${fii_table[i].ultimoRendimento.dataPag}</td><td>R$ ${fii_table[i].ultimoRendimento.rendimento}</td><td>R$ ${fii_table[i].valorAtual}</td><td>${fii_user[i].qtde}</td><td>R$ ${fii_user[i].totalgasto}</td><td>R$ ${(fii_user[i].totalgasto/fii_user[i].qtde).toFixed(2)}</td><td>${fii_table[i].ultimoRendimento.rendimento}%</td><td>${fii_table[i].dividendYield}%</td><td>R$ ${fii_table[i].rendimentoMedio24M.toFixed(2)}</td></tr>`
            }if(i == 13){
                document.querySelector("table").innerHTML += `<tr class ="fundo_total"><td colspan="4">Total Geral</td><td>R$ ${total_proventos.toFixed(2)}</td><td>-</td><td>${total_cotas}</td><td>R$ ${total_investido.toFixed(2)}</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>`
                document.querySelector("#loading").style.display = "none";
            }
        }
    }
    fazTabela();
}

