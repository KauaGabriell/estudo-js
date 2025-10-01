/**
 * Essa é a minha versão do código para a resolução do problema. (Kauã Gabriell)
 *
 */

const fs = require('fs').promises;
const path = require('path');

// Configurações
const USUARIOS_JSON = path.resolve(__dirname, 'usuarios.json');
const NOME_ARQUIVO_RELATORIO = 'relatorio.txt';

/**
 * Gera um relatório com os usuários ativos do sistema
 * @param {string} arquivo - Caminho para o arquivo JSON com os usuários
 * @returns {Promise<void>}
 */
async function gerarRelatorio(arquivo) {
  try {
    const conteudo = await fs.readFile(arquivo, 'utf-8');
    const usuarios = JSON.parse(conteudo);

    const caminhoRelatorio = path.join(__dirname, NOME_ARQUIVO_RELATORIO);

    // Filtra apenas usuários ativos
    const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo === true);

    // Formata os dados dos usuários ativos
    const linhasUsuarios = usuariosAtivos.map(
      (usuario) =>
        `ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email}`,
    );

    const conteudoUsuarios = linhasUsuarios.join('\n');
    const totalAtivos = usuariosAtivos.length;

    // Gera o conteúdo do relatório
    const relatorio = `--- Relatório de Usuários Ativos ---
Data de Geração: ${new Date().toLocaleString('pt-BR')}

${conteudoUsuarios}

Total de Usuários Ativos: ${totalAtivos}`;

    await fs.writeFile(caminhoRelatorio, relatorio, { flag: 'w' });

    console.log(`Relatório gerado com sucesso: ${caminhoRelatorio}`);
    console.log(`Total de usuários ativos: ${totalAtivos}`);
  } catch (erro) {
    console.error('Erro ao gerar relatório:', erro.message);
    throw erro;
  }
}

gerarRelatorio(USUARIOS_JSON);
