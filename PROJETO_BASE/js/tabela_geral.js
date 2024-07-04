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

    

   



    /* 
    https://api-simple-flask.herokuapp.com/api/sigla_fundo
    
    Implemente aqui os cálculos solicitados no PDF,
    os cálculos devem ter como base, uma repetição no vetor fii_user
    e para cada fundo, consulte suas demais informações no vetor fii_table

    DICA para procurar um fundo do vetor fii_user no vetor fii_table
    let dados_fii = fii_table.find( (item) => item.fundo.indexOf(fii.nome.toUpperCase()) >= 0);

    Dentro da repetição, após os cálculos, monte a linha na tabela com o comando

    document.querySelector("table").innerHTML += variável

    Note que o cabeçalho da tabela já está pronto no HTML.
    Fora do for, adicione na tabela a linha final de total conforme exemplo no PDF.
    */    
}





let Percentual_de_rendimento_do_FII