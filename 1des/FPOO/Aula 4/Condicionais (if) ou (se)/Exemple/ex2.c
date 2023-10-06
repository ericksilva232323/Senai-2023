#include <stdio.h>
/*Programa que lê um número "a" e informa se é par ou impar*/
int main(){
	//Declaração de variáveis
	int a, b;
	//Etrada de dados
	printf("Digite um número inteiro:");
	scanf("%d", &a);
	//Processamento (resto da divisão inteira)
	b = a % 2;
	//Saída com condicional SE o resto for 1 é impar, senão é par
	if(b) printf("Impar");
	else printf("Par");
	//Fim
	return 0;
}
