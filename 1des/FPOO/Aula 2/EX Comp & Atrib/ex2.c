#include <stdio.h>
/*
	Este � um exemplo da diferen�a
	entre atribui��o e compara��o
*/
int main(){
	int x  = 10; //Declara��o e atribui��o
	int y = 15;
	int z = x == y; //Compara��o igualdade
	printf("O valor de z = %d\n",z);
	int z = x != y; //Compara��o diferen�a
	printf("O valor de z = %d\n",z);
	int z = x > y; //Compara��o Maior
	printf("O valor de z = %d\n",z);
	int z = x < y; //Compara��o Maior
	printf("O valor de z = %d\n",z);
	int z = x <= y; //Compara��o Menor ou igual
	printf("O valor de z = %d\n",z);
	int z = x >= y; //Compara��o Maior ou igual
}
