//criar obejtos a partir de uma classe
class coisa{
    constructor(nome,preço,qtd){
        this.nome = nome;
        this.preço = preço;
        this.qtd = qtd;
    }
    nome;
    preço;
    qtd;
    metodo(){
        return this.preço * this.qtd
    }
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}</label>`;
        str += `<label>Preço:</label><label>${this.preço}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label><span>R$</span>${this.total().toFixed(2)}</label>`;
        return str;
    }
}
//Criar uma estancia desta classe
const lista = [];
lista.push(new coisa('cadeira', 59.99, 10));
lista.push(new coisa('mesa', 129.99, 1));
lista.push(new coisa('pratos', 39.99, 5));
lista.push(new coisa('talher', 19.99, 50));
lista.push(new coisa('panela', 29.99, 5));

//Mostrar no console
console.table(lista);


//Saídas HTML
//const main = document.getElementById('objetos');
//const div1 = document.createElement('div');
//const div2 = document.createElement('div');
//const div3 = document.createElement('div');
//const div4 = document.createElement('div');
//const div5 = document.createElement('div');

//div1.innerHTML = obj.showHTML();
//div2.innerHTML = obj.showHTML();
//div3.innerHTML = obj.showHTML();
//div4.innerHTML = obj.showHTML();
//div5.innerHTML = obj.showHTML();

//Mostrar no HTML
const main = document.getElementById('objetos');
lista.forEach(obj => {
    const div = document.createElement('div');
    div.innerHTML = obj.showHTML();
    main.appendChild(div);
});