#include <stdio.h>
/*Programa que avalia médias com três critérios
"Aprovado" >= 50
"Reprovado" < 20
"Recuperação" entre 20 e 49
*/
int main(){
	//Declaração de variáveis
	int media;
	//Etrada de dados
	printf("Digite a média final do aluno de 0 a 100:");
	scanf("%d", &media);
	//Processamento e saída com condicional
	if(media >= 50)
		printf("Aprovado");
	else{
		if(media < 20)
			printf("Reprovado");
		else
			printf("Recuperação");
	}
		
	//Fim
	return 0;
}
