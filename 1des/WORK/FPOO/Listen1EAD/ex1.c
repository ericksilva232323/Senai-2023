#include <stdio.h>
int main(){
	//Declara??o de vari?veis
	int a, b, c, x;
	//Etrada
	printf("Digite tr?s n?meros inteiro separados por espa?os:");
	scanf("%d %d %d",&a, &b, &c);
	//Processamento
	x = ( a + b ) / c;
	//Sa?da
	printf("a = %d\nb = %d\nc = %d\n", a, b, c);
	printf("O resultado da express?o (a + b) / c = %d",x);
	return 0;
}

