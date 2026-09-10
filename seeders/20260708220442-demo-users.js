'use strict';
const {User} = require('../backend/models');

module.exports = {
  async up(queryInterface, Sequelize) {

    await User.bulkCreate(
      [
        {
          fullName: 'João Silva',
          birth_date: '1990-01-15',
          cpf: '11111111111',
          email: 'joao.silva@email.com',
          phone: '11999990001',
          role: 'admin',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Maria Oliveira',
          birth_date: '1992-03-20',
          cpf: '11111111112',
          email: 'maria.oliveira@email.com',
          phone: '11999990002',
          role: 'funcionario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Carlos Souza',
          birth_date: '1988-07-10',
          cpf: '11111111113',
          email: 'carlos.souza@email.com',
          phone: '11999990003',
          role: 'veterinario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Ana Pereira',
          birth_date: '1995-11-05',
          cpf: '11111111114',
          email: 'ana.pereira@email.com',
          phone: '11999990004',
          role: 'viewer',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Lucas Almeida',
          birth_date: '1993-02-18',
          cpf: '11111111115',
          email: 'lucas.almeida@email.com',
          phone: '11999990005',
          role: 'recepcao',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Fernanda Costa',
          birth_date: '1989-08-09',
          cpf: '11111111116',
          email: 'fernanda.costa@email.com',
          phone: '11999990006',
          role: 'funcionario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Ricardo Lima',
          birth_date: '1987-05-30',
          cpf: '11111111117',
          email: 'ricardo.lima@email.com',
          phone: '11999990007',
          role: 'veterinario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Patrícia Gomes',
          birth_date: '1994-12-12',
          cpf: '11111111118',
          email: 'patricia.gomes@email.com',
          phone: '11999990008',
          role: 'viewer',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Eduardo Rocha',
          birth_date: '1991-09-14',
          cpf: '11111111119',
          email: 'eduardo.rocha@email.com',
          phone: '11999990009',
          role: 'recepcao',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Juliana Martins',
          birth_date: '1996-06-03',
          cpf: '11111111120',
          email: 'juliana.martins@email.com',
          phone: '11999990010',
          role: 'funcionario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Gabriel Santos',
          birth_date: '1990-04-01',
          cpf: '11111111121',
          email: 'gabriel.santos@email.com',
          phone: '11999990011',
          role: 'admin',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Camila Barbosa',
          birth_date: '1993-10-21',
          cpf: '11111111122',
          email: 'camila.barbosa@email.com',
          phone: '11999990012',
          role: 'viewer',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Bruno Fernandes',
          birth_date: '1986-01-28',
          cpf: '11111111123',
          email: 'bruno.fernandes@email.com',
          phone: '11999990013',
          role: 'veterinario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Larissa Ribeiro',
          birth_date: '1997-07-07',
          cpf: '11111111124',
          email: 'larissa.ribeiro@email.com',
          phone: '11999990014',
          role: 'recepcao',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Felipe Araújo',
          birth_date: '1992-11-11',
          cpf: '11111111125',
          email: 'felipe.araujo@email.com',
          phone: '11999990015',
          role: 'funcionario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Aline Mendes',
          birth_date: '1998-03-08',
          cpf: '11111111126',
          email: 'aline.mendes@email.com',
          phone: '11999990016',
          role: 'viewer',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Rafael Castro',
          birth_date: '1985-09-17',
          cpf: '11111111127',
          email: 'rafael.castro@email.com',
          phone: '11999990017',
          role: 'admin',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Beatriz Nunes',
          birth_date: '1999-05-22',
          cpf: '11111111128',
          email: 'beatriz.nunes@email.com',
          phone: '11999990018',
          role: 'recepcao',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Thiago Moraes',
          birth_date: '1984-12-30',
          cpf: '11111111129',
          email: 'thiago.moraes@email.com',
          phone: '11999990019',
          role: 'veterinario',
          password: '123456',
          avatarUrl: null
        },
        {
          fullName: 'Vanessa Freitas',
          birth_date: '1991-08-16',
          cpf: '11111111130',
          email: 'vanessa.freitas@email.com',
          phone: '11999990020',
          role: 'funcionario',
          password: '123456',
          avatarUrl: null
        }
      ],
      {
        individualHooks: true
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      cpf: {
        [Sequelize.Op.in]: [
          '11111111111',
          '11111111112',
          '11111111113',
          '11111111114',
          '11111111115',
          '11111111116',
          '11111111117',
          '11111111118',
          '11111111119',
          '11111111120',
          '11111111121',
          '11111111122',
          '11111111123',
          '11111111124',
          '11111111125',
          '11111111126',
          '11111111127',
          '11111111128',
          '11111111129',
          '11111111130'
        ]
      }
    });
  }
};