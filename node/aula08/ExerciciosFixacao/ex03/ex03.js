const express = require('express');
const { appendFile } = require('fs/promises');
const app = express();
const path = require('path');
const fs = require('fs').promises;

path.resolve(__dirname);
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/log', async (req, res) => {
    try {
        const { mensagem } = req.body;

        if (!mensagem) {
            return res.status(400).json({ erro: 'A mensagem não pode ser vazia.' });
        }

        const linhaDeLog = `[${new Date().toISOString()}] - ${mensagem}\n`;
        const caminhoDoLog = path.join(__dirname, 'system.log');
        
        await fs.appendFile(caminhoDoLog, linhaDeLog);

        res.status(201).json({ status: "Log salvo com sucesso" });

    } catch (error) {
        console.error('Erro ao salvar o log:', error);
        res.status(500).json({ status: 'erro', mensagem: 'Falha interna ao salvar o log.' });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
