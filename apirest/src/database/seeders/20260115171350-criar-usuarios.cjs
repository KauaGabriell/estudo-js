const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    // 1. Performance: Geramos o hash apenas uma vez para todos
    const salt = bcrypt.genSaltSync(8);
    const passwordHash = bcrypt.hashSync('123456', salt);
    
    // 2. Lista base de usuários
    const users = [];

    // Usuário 1: O Admin (Manual)
    users.push({
      nome: 'Admin Master',
      email: 'admin@sistema.com',
      password_hash: passwordHash,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // Usuários 2 a 8: Gerados em Loop (Algoritmo)
    for (let i = 1; i <= 7; i++) {
      users.push({
        nome: `Usuário Teste ${i}`,
        email: `user${i}@teste.com`, // user1@teste.com, user2@teste.com...
        password_hash: passwordHash,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    // 3. Bulk Insert Atômico
    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface) {
    // Segurança: Deleta apenas os usuários de teste criados acima
    // Usamos o operador Op.like ou Op.in se fosse via Model, 
    // mas em QueryInterface usamos SQL ou arrays diretos.
    
    const emailsToDelete = ['admin@sistema.com'];
    for (let i = 1; i <= 7; i++) {
      emailsToDelete.push(`user${i}@teste.com`);
    }

    await queryInterface.bulkDelete('users', {
      email: emailsToDelete
    });
  }
};