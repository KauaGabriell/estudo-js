const express = require('express');
const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**Requisição */
const form = `<form action="/produtos" method="POST">
<label for="nome">Nome</label>
<input type="text" id="nome" name="nome" required>

<label for="preco">Preço</label>
<input type="text" id="preco" name="preco" required>

<button type="submit">Enviar</button>
</form>`;

app.get('/', (req, res) => {
    res.send(form);
});

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const regexNomeValido = /^[a-zA-Z ]+$/; // A regex para validar nome

    // --- VALIDAÇÕES SEPARADAS ---

    // 1. Validação do Nome
    if (!nome || !String(nome).trim()) { // Verifica se nome é vazio ou só espaços
        return res.status(400).json({
            status: 'erro',
            mensagem: 'O nome do produto é obrigatório.'
        });
    }
    if (!regexNomeValido.test(nome)) { // Verifica se o nome contém caracteres inválidos
        return res.status(400).json({
            status: 'erro',
            mensagem: 'O nome deve conter apenas letras e espaços.'
        });
    }

    // 2. Validação do Preço (mantive sua lógica, apenas movi para ser específica)
    if (!String(preco).trim()) { // Verifica se preço é vazio ou só espaços
        return res.status(400).json({
            status: 'erro',
            mensagem: 'O preço do produto é obrigatório.'
        });
    }
    const precoNumerico = Number(preco);
    if (isNaN(precoNumerico) || precoNumerico <= 0) {
        return res.status(400).json({
            status: 'erro',
            mensagem: 'O preço deve ser um número válido e maior que zero.'
        });
    }

    // --- LÓGICA DE CRIAÇÃO (se todas as validações passarem) ---
    const produto = {
        status: 'sucesso',
        produtoCriado: {
            id: Date.now(),
            nome: nome,
            preco: precoNumerico
        }
    };
    res.json(produto);
});

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
    console.log(`http://localhost:${port}`);
});