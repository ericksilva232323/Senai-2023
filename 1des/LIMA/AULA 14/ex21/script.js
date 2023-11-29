function contar21(){
    let saida = document.getElementById('saida21')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}

function contar22() {
    let saida = document.getElementById('saida22')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0){
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;` 
        }else{
            saida.innerHTML += ` ${cont} &#x1F449;` 
        }
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1`
}

function contar23(){
    let saida = document.getElementById('saida23')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while(cont <= 10){
        if(cont % 2 == 1){
            saida.innerHTML += `<mark> <strong> ${cont} </strong></mark>&#x1F449;`
        }else{
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}

function contar24(){
        let saida = document.getElementById('saida24')
    
        saida.innerHTML += `<h2>Contando de 10 até 1</h2>`
    
        let cont = 1
        while (cont <= 10) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont ++ // Corresponde a cont = cont + 1
        }
        saida.innerHTML += ` &#x1F3C1;`
}