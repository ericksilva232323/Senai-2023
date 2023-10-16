//var nome = document.getElementById('nome')
//var resultado = document.getElementById('resultado')
//function buscarElemento(){
    //let nome = document.getElementById('nome')

    //resultado.innerHTML = nome.value
//}

function ex1(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    document.querySelector('#resultado').innerHTML = `A soma de 'a' + 'b' divido por 'c' é igual a: ${(a+b)/c}`

}

function ex2(){
    let vel = Number(document.getElementById('vel').value);
    let dis = Number(document.getElementById('dis').value);
    
    document.querySelector('#tempo').innerHTML = `Tempo necessario resultante de: ${dis/vel}`
}

function ex3(){
    let sal = Number(document.getElementById('sal').value);
    let indP = Number(document.getElementById('indP').value);

    document.querySelector('#reaSAL').innerHTML = `Valor total com reajuste: ${sal*((indP/100)*indP)}`    
}

function ex4(){
    let nomeT = document.getElementById('nomeT').value;
    let vit = Number(document.getElementById('vit').value );
    let emp = Number(document.getElementById('emp').value );

    document.querySelector('#totalP').innerHTML = `Pontuação total de pontos de: ${nomet, emp + (vit * 3)}`
}

function ex5(){
    let n = Number(document.getElementById('n').value);
    if(n > 0){
        document.querySelector('#apTela').innerHTML = `n - 1 = ${n - 1}; n + 1 = ${n + 1} `
    }
}

function ex6(){
    let veloAviao = 900;
    let dist6 = Number(document.getElementById('dist6').value);
    
    document.querySelector('#tempo6').innerHTML = `tempo estimado de ${ dist6 / veloAviao }` 

}
function ex7(){
    let caminhao = 18.000;
    let alqueire = 250.000;
    

}

