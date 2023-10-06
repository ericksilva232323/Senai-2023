#include <stdio.h>
#include <locale.h>
#define SIZE 10
int fila[SIZE];
int ponteiro = 0;
int i, x;
void mostraFila(){
	printf("Fila:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d ", fila[i]);
	printf("\n");
}
int push(int dado){
	if(ponteiro < SIZE){
		fila[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}
int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		for(i = 0; i < ponteiro; i++){
			fila[i] = fila[i+1];
		}
		return 1;
	}else
		return 0;
}

int main(){
	setlocale(LC_ALL," ");
	int op = 0;
	do{
		printf("escolah uma opção:\n1. adicionar \n2. remover \n0. sair");
		scanf("%d", &op);
		if(op == 1){
			printf("digite um numero inteiro:");
			scanf("%d", &x);
			push(x);
			mostrarFila();
		}else if(op == 2){
			pop();
			mostrarFila();
		}
	}while(op == 0){
		Printf("obrigado pro usar nosso sistema")
	}
}
