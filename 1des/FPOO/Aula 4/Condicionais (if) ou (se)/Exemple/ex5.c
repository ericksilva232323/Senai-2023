
#include <stdio.h>
/*Programa que avalia m�dias com crit�rios
"Aprovado" >= 50 E Frequ�ncia >= 75 %
total de presen�as
*/
int main(){
	//Declara��o de vari�veis
	int nota1, nota2, nota3, media;
	float aulas, presencas, frequencia;
	//Entradas
	printf("Digite as tr�s notas separadas por espa�os: ");
	scanf("%d %d %d", &nota1, &nota2, &nota3);
	printf("Digite o total de aulas dadas: ");
	scanf("%d",&aulas);
	printf("Digite o total de precen�as: ");
	scanf("%d",&presencas);
	
	//Processamento
	media = (nota1 + nota2 + nota3) / 3;
	frequencia = presencas / aulas;
	
	//Sa�das parciais
	printf("M�dia = %d\n", media);
	printf("Frequ�ncia = %.2f\t ou %.0f%%\n", frequencia, frequencia * 100);

	//Processamento e sa�da com condicional
	if(media >= 50 && frequencia >= 0.75)
		printf("Aprovado");
	else
		printf("Reprovado");
	//Fim
	return 0;
}
