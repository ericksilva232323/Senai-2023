#include <stdio.h>
/* Entrada -> Processamento -> Sa�da*/
int main(){
	char x; //Declara��o de vari�vel
	int quadrado;
	//Entrada
	printf("Digite uma letra:");
	scanf("%c",&x);
	//Processamento
	quadrado = x * x;
	//Sa�da
	printf("O quadrado do c�digo ASCII digitado � %d",quadrado);
}
