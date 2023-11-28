function contar(){
    let saida = document.getElementById('saida')

saida.innerHTML += `<h2>Contando de 1 ate 10</h2>`

let cont = 1
while (cont <= 10){
    saida.innerHTML += ` ${cont}`
}
}