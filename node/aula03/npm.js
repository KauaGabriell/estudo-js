/*
 * ===================================================================================
 * Resumo da Aula: NPM - Gerenciador de Pacotes do Node.js
 * ===================================================================================
 *
 * Este arquivo contém um resumo dos principais comandos NPM abordados na aula.
 * O conteúdo está totalmente comentado para servir como um guia de referência rápida
 * sem causar erros de execução.
 *
 */


/*
 * ======================================
 * 1. INICIANDO UM PROJETO (`npm init`)
 * ======================================
 *
 * Cria o arquivo `package.json`, que gerencia as informações e dependências do projeto.
 *
 * // Inicia um assistente com perguntas para configurar o package.json
 * npm init
 *
 * // Inicia o projeto com todas as configurações padrão (versão rápida)
 * npm init -y
 *
 * Dicas Importantes:
 * - Não use espaços ou acentos nos nomes das pastas do projeto.
 * - Não nomeie seu projeto com nomes de pacotes famosos (ex: 'express', 'webpack').
 *
 */


/*
 * ==========================================
 * 2. INSTALANDO PACOTES (`npm install`)
 * ==========================================
 *
 * Adiciona bibliotecas e ferramentas de terceiros ao projeto.
 *
 * // Instala a versão mais recente de um pacote
 * npm install express
 *
 * // Atalho comum para 'install'
 * npm i express
 *
 */


/*
 * ======================================
 * 3. GERENCIANDO DEPENDÊNCIAS
 * ======================================
 *
 * Pacotes podem ser de produção (necessários para rodar a aplicação) ou de
 * desenvolvimento (usados apenas para construir o projeto).
 *
 * // Instala como dependência de PRODUÇÃO (necessária para o app funcionar)
 * // Atalho: -P ou --save-prod
 * npm install express -P
 *
 * // Instala como dependência de DESENVOLVIMENTO (ferramenta de build, teste, etc.)
 * // Atalho: -D ou --save-dev
 * npm install webpack -D
 *
 */


/*
 * ============================================
 * 4. CONTROLE DE VERSÃO (Semantic Versioning)
 * ============================================
 *
 * Formato: MAJOR.MINOR.PATCH (ex: 4.17.1)
 *
 * // Instalar uma VERSÃO EXATA de um pacote
 * npm install express@2.1.0
 *
 * // Instalar a ÚLTIMA VERSÃO dentro de uma MAJOR (ex: a última da versão 4.x.x)
 * npm install express@4.x
 *
 * Símbolos no `package.json`:
 * ^ (Circunflexo): Permite atualizar versões de PATCH e MINOR. (Ex: ^4.17.1 -> pode ir até a 4.99.99)
 * ~ (Til): Permite atualizar APENAS versões de PATCH. (Ex: ~4.17.1 -> pode ir até a 4.17.99)
 *
 * // Para instalar uma versão exata, sem nenhum símbolo (^ ou ~)
 * // Atalho: -E
 * npm install express --save-exact
 *
 */


/*
 * ===========================================
 * 5. COMANDOS ÚTEIS DE GERENCIAMENTO
 * ===========================================
 *
 * // DESINSTALAR um ou mais pacotes
 * npm uninstall express webpack
 *
 * // LISTAR pacotes instalados (mostra todas as sub-dependências)
 * npm ls
 *
 * // LISTAR apenas os pacotes de primeiro nível (os que você instalou)
 * npm ls --depth=0
 *
 * // VERIFICAR quais pacotes estão desatualizados
 * npm outdated
 *
 * // ATUALIZAR os pacotes (respeitando as regras de versão ^ e ~)
 * npm update
 *
 */

// Fim do resumo. Este arquivo .js é seguro e não executa nenhuma ação.