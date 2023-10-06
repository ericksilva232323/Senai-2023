#include <stdio.h>
#include <stdbool.h>
/*
	Este é um exemplo da diferença
	entre atribuição e comparação
*/
int main(){
	int x  = 10; //Declaração e atribuição
	int y = x;
	bool z = true;
	printf("O valor de z = %d\n",z);
	z = false;
	printf("O valor de z = %d\n",z);
}
