/*No arquivo imc.js crie uma classe chamada Paciente com os atributos nome, peso e altura, 
um método chamado imc() que retorna o IMC do paciente 
e outro chamado diagnosticar() que classifique de acordo com os seguintes critérios: abaixo 
de 18.5 - abaixo do peso; 
entre 18.5 e 24.9 - peso normal; 
entre 25 e 29.9 - sobrepeso; 
entre 30 e 34.9 - obesidade grau 1; 
entre 35 e 39.9 - obesidade grau 2; 
acima de 40 - obesidade grau 3.*/

class Paciente{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    imc(){
        return this.peso /(this.altura * this.altura);
    }
    dignosticar(){
        if(this.imc() < 18.5 ){
            return "Abaixo do peso";
        }else if(this.imc() > 18.5 && this.imc() < 24.9){
            return "Peso Normal";
        }else if(this.imc() > 25 && this.imc() < 29,9){
            return "Sobrepeso";
        }else if(this.imc() > 30 && this.imc() < 34.9){
            return "Obesidade Grau I";
        }else if(this.imc() > 35 && this.imc() <39.9){
            return "Obesidade Grau II";
        }else {
            return "Obesidade Grau III";
        }
    }
showHTML(){
    let str = `<label>${this.nome}</label><hr>`;
    str += `<label>Peso:${this.peso}</label>`;
    str += `<label>Altura:${this.altura}</label>`;
    str += `<label>IMC:${this.imc().toFixed(2)}</label><hr>`;
    str += `<label>Diagnostico:</label><label>${this.dignosticar()}</label>`;
    return str;
    }
}
const lista = [];
lista.push(new Paciente('André Mattos', 80, 1.8));
lista.push(new Paciente('João da Silva', 100, 1.7));
lista.push(new Paciente('Maria de Souza', 60, 1.65));
lista.push(new Paciente('José de Oliveira', 90, 1.75));
lista.push(new Paciente('Silvia Andrade', 60, 1.85));
lista.push(new Paciente('Sueli Oliveira', 44, 1.65));
lista.push(new Paciente('Pedro de Souza', 110, 1.85));

const main = document.getElementById('imc');
lista.forEach(lista =>{
    const div = document.createElement('div');
    div.innerHTML = lista.showHTML();
    main.appendChild(div);
})