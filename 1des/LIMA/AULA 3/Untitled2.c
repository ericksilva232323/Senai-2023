#include <stdio.h>
#include <math.h>

float calcular_juros_compostos(float principal, float taxa, int anos) {
    float montante = principal * pow(1 + taxa/100, anos);
    return montante;
}

int main() {
    float principal, taxa;
    int anos;

    // Solicitar entrada do usuário
    printf("Digite o valor principal: ");
    scanf("%f", &principal);

    printf("Digite a taxa de juros (em porcentagem): ");
    scanf("%f", &taxa);

    printf("Digite o número de anos: ");
    scanf("%d", &anos);

    // Calcular o montante com juros compostos
    float montante = calcular_juros_compostos(principal, taxa, anos);

    // Exibir o montante calculado
    printf("O montante com juros compostos é: %.2f\n", montante);

    return 0;
}

