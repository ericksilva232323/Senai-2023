#include <stdio.h>
/* Entrada -> Processamento -> Sa�da*/
int main(){
	int x; //Declara��o de uma vari�vel
	//Entrada
	printf("Digite um n�mero inteiro:");
	scanf("%d",&x);
	//Processamento
	x = x * x;
	//Sa�da
	printf("O valor digitado ao quadrado � %d",x);
}
