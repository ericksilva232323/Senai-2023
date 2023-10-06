#include <stdio.h>
/* Entrada -> Processamento -> Saída*/
int main(){
	int x; //Declaração de uma variável
	//Entrada
	printf("Digite um número inteiro:");
	scanf("%d",&x);
	//Processamento
	x = x * x;
	//Saída
	printf("O valor digitado ao quadrado é %d",x);
}
