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

