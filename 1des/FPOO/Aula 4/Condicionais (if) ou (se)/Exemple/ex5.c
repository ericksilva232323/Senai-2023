
#include <stdio.h>
/*Programa que avalia médias com critérios
"Aprovado" >= 50 E Frequência >= 75 %
total de presenças
*/
int main(){
	//Declaração de variáveis
	int nota1, nota2, nota3, media;
	float aulas, presencas, frequencia;
	//Entradas
	printf("Digite as três notas separadas por espaços: ");
	scanf("%d %d %d", &nota1, &nota2, &nota3);
	printf("Digite o total de aulas dadas: ");
	scanf("%d",&aulas);
	printf("Digite o total de precenças: ");
	scanf("%d",&presencas);
	
	//Processamento
	media = (nota1 + nota2 + nota3) / 3;
	frequencia = presencas / aulas;
	
	//Saídas parciais
	printf("Média = %d\n", media);
	printf("Frequência = %.2f\t ou %.0f%%\n", frequencia, frequencia * 100);

	//Processamento e saída com condicional
	if(media >= 50 && frequencia >= 0.75)
		printf("Aprovado");
	else
		printf("Reprovado");
	//Fim
	return 0;
}
