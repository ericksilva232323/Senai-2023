#include <stdio.h>
#include <stdbool.h>
/*
	Este � um exemplo da diferen�a
	entre atribui��o e compara��o
*/
int main(){
	int x  = 10; //Declara��o e atribui��o
	int y = x;
	bool z = true;
	printf("O valor de z = %d\n",z);
	z = false;
	printf("O valor de z = %d\n",z);
}
