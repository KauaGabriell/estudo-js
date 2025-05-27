/**
 * | Operador | Nome                     | Exemplo                               | Resultado (e explicação)                                  |
 * |----------|--------------------------|---------------------------------------|-----------------------------------------------------------|
 * | `&&`     | E Lógico (AND)           | `true && false`                       | `false` (retorna o primeiro valor "falsy" ou o último)     |
 * |          |                          | `let x = 10; (x > 5 && x < 20)`       | `true`                                                    |
 * |          |                          | `"Olá" && 0`                          | `0` ("Olá" é truthy, retorna o próximo; 0 é falsy)        |
 * |          |                          | `null && "Mundo"`                     | `null` (null é falsy, retorna null - curto-circuito)      |
 * | `||`     | OU Lógico (OR)           | `true || false`                       | `true` (retorna o primeiro valor "truthy" ou o último)    |
 * |          |                          | `let y = 3; (y < 1 || y > 10)`        | `false`                                                   |
 * |          |                          | `0 || "Padrão"`                       | `"Padrão"` (0 é falsy, retorna o próximo)                 |
 * |          |                          | `"Valor" || "Ignorado"`               | `"Valor"` ("Valor" é truthy, retorna "Valor" - curto-circuito)|
 * | `!`      | NÃO Lógico (NOT)         | `!true`                               | `false` (inverte o valor booleano)                        |
 * |          |                          | `!0`                                  | `true` (0 é falsy, !falsy é true)                         |
 * |          |                          | `!"Texto"`                            | `false` ("Texto" é truthy, !truthy é false)               |
 * | `??`     | Coalescência Nula        | `null ?? "Padrão"`                  | `"Padrão"` (retorna o direito se o esquerdo for null/undefined)|
 * |          |                          | `undefined ?? "Outro Padrão"`         | `"Outro Padrão"`                                          |
 * |          |                          | `0 ?? "Não usado"`                    | `0` (0 não é null nem undefined, então retorna 0)           |
 * |          |                          | `"" ?? "Texto Vazio"`                 | `""` ("" não é null nem undefined, então retorna "")      |
 */