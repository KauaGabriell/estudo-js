// src/database/seeds/[TIMESTAMP]-seed-5-alunos.js

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: 'Kaua',
          sobrenome: 'Geraldo',
          email: 'kaua@email.com',
          idade: 19,
          peso: 75.5,
          altura: 1.80,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Maria',
          sobrenome: 'Silva',
          email: 'maria@email.com',
          idade: 22,
          peso: 60.2,
          altura: 1.65,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'José',
          sobrenome: 'Oliveira',
          email: 'jose@email.com',
          idade: 30,
          peso: 85.0,
          altura: 1.75,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Ana',
          sobrenome: 'Costa',
          email: 'ana@email.com',
          idade: 25,
          peso: 55.8,
          altura: 1.60,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Carlos',
          sobrenome: 'Pereira',
          email: 'carlos@email.com',
          idade: 28,
          peso: 92.3,
          altura: 1.88,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('alunos', null, {});
  },
};