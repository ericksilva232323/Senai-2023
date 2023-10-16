function inss(salario){
    if(salario < 1320.01)
        return salario * 7.5 / 100;
    else if(salario < 2571.30)
        return salario * 9 / 100;
    else if(salario < 3856.95)
        return salario * 12 / 100;
    else if(salario < 7507.49)
        return salario * 14 / 100;
    else
        return 1051.05;
    
}
function irrf(salario){
    if(salario < 1320.01)
        return salario * 7.5 / 100;
    else if(salario < 2571.30)
        return salario * 15 / 100;
    else if(salario < 3856.95)
        return salario * 22.5 / 100;
    else if(salario < 7507.49)
        return salario * 27.5 / 100;
    else
        return 1051.05;
}
let salario = 1000;
let inss = inss(salario);
let salarioBase = salario - inss;
let irrf = irrf(salario);
let salarioLiquido = salarioBase - irrf;

console.log("salario: " + salario);
console.log("INSS: " + inss);
console.log("Salario Base:" + salarioBase);
console.log("IRRF: " + irrf);
console.log("Salario Liquido:" + salarioLiquido);
