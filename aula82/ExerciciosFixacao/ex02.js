class Notificacao{
    constructor(destinatario, mensagem){
        this.destinatario = destinatario,
        this.mensagem = mensagem;
    }

    enviar(){
        return (`O ${this.destinatario} está enviando a mensagem. Mensagem: ${this.mensagem}`);
    }
}

class EmailNotificacao extends Notificacao{
    constructor(destinatario, mensagem, assunto){
        super(destinatario, mensagem);
        this.assunto = assunto;
    }

    enviar(){
        return (`Enviando E-MAIL para ${this.destinatario} | Assunto: ${this.assunto} | Mensagem: ${this.mensagem}`)
    }
}

class SMSNotificacao extends Notificacao{
    constructor(destinatario, mensagem){
        super(destinatario, mensagem);
    }

    enviar(){
        if(this.mensagem.length > 160){
            return (`Erro ao enviar mensagem. Longa demais!!`)
        }else{
            return (`Enviando SMS para ${this.destinatario} | Mensagem: ${this.mensagem}`)
        }
    }
}

const email = new EmailNotificacao('joao@email.com', 'Sua fatura chegou!', 'Fatura de Agosto');
const smsCurto = new SMSNotificacao('99999-9999', 'Lembrete de reunião hoje às 15h.');
const smsLongo = new SMSNotificacao('88888-8888', 'Este é um lembrete de reunião muito importante que vai acontecer hoje à tarde. Por favor, não se esqueça de trazer todos os documentos necessários para a nossa discussão sobre o projeto do próximo trimestre. Sua presença é fundamental para o sucesso da equipe.');

console.log(email.enviar());
console.log(smsCurto.enviar());
console.log(smsLongo.enviar()); // Deve mostrar o erro de limite de caracteres