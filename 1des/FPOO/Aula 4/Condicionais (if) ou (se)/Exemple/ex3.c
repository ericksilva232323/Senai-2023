#include <stdio.h>
/*Programa que l� um n�mero "a" e informa se � par ou impar*/
int main(){
	//Declara��o de vari�veis
	int a, b;
	//Etrada de dados
	printf("Digite um n�mero inteiro:");
	scanf("%d", &a);
	//Processamento (resto da divis�o inteira)
	b = a % 2;
	//Sa�da com condicional SE o resto for 1 � impar, sen�o � par
	if(b) printf("Impar");
	else printf("Par");
	//Fim
	return 0;
}
