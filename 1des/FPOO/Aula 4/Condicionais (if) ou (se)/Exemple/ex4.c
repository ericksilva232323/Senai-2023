#include <stdio.h>
/*Programa que avalia m�dias com tr�s crit�rios
"Aprovado" >= 50
"Reprovado" < 20
"Recupera��o" entre 20 e 49
*/
int main(){
	//Declara��o de vari�veis
	int media;
	//Etrada de dados
	printf("Digite a m�dia final do aluno de 0 a 100:");
	scanf("%d", &media);
	//Processamento e sa�da com condicional
	if(media >= 50)
		printf("Aprovado");
	else{
		if(media < 20)
			printf("Reprovado");
		else
			printf("Recupera��o");
	}
		
	//Fim
	return 0;
}
