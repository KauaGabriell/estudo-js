const pedidos = [
    {
      id: 'PED001',
      cliente: 'Ana Silva',
      itens: [
        { produto: 'Caneta Azul', quantidade: 2, precoUnitario: 3.50 },
        { produto: 'Caderno Espiral', quantidade: 1, precoUnitario: 15.00 }
      ],
      status: 'Processando'
    },
    {
      id: 'PED002',
      cliente: 'Bruno Costa',
      itens: [
        { produto: 'Teclado Gamer', quantidade: 1, precoUnitario: 250.00 },
        { produto: 'Mouse sem Fio', quantidade: 1, precoUnitario: 80.00 },
        { produto: 'Headset', quantidade: 1, precoUnitario: 120.00 }
      ],
      status: 'Enviado'
    },
    {
      id: 'PED003',
      cliente: 'Carla Dias',
      itens: [
        { produto: 'Café Expresso (cápsulas)', quantidade: 3, precoUnitario: 25.00 },
        { produto: 'Chá Verde (caixa)', quantidade: 2, precoUnitario: 18.00 }
      ],
      status: 'Processando'
    },
    {
      id: 'PED004',
      cliente: 'Daniel Rocha',
      itens: [
        { produto: 'Livro "Clean Code"', quantidade: 1, precoUnitario: 90.00 }
      ],
      status: 'Entregue'
    },
    {
      id: 'PED005',
      cliente: 'Elisa Ferreira',
      itens: [
        { produto: 'Monitor LED 24"', quantidade: 1, precoUnitario: 750.00 }
      ],
      status: 'Cancelado'
    }
  ];
  

  module.exports = pedidos;