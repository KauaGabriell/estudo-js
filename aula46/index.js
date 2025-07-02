
// Exemplo simples de try, catch e finally
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero!");
        }
        let resultado = a / b;
        console.log(`Resultado: ${resultado}`);
    } catch (erro) {
        console.log("Ocorreu um erro:", erro.message);
    } finally {
        console.log("Operação finalizada.");
    }
}

dividir(10, 2); // Deve mostrar o resultado e "Operação finalizada."
dividir(10, 0); // Deve mostrar o erro e "Operação finalizada."