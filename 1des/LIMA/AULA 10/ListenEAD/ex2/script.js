
function calculo(){
    let velocidade = Number(document.getElementById('velocidade').value);
    let distancia = Number(document.getElementById('distancia').value);

    document.getElementById('#result').innerHTML = `Será necessário para o carro percorrer a 'distancia' informada em um tempo de: ${distancia / velocidade}`
}
