/**Simulando processamento de pedidos */
// A função que simula o envio para um sistema externo
function enviarParaSistema(pedido) {
    console.log(`Enviando pedido #${pedido.id} para o sistema. Status: ${pedido.status}`);
  }
  
  // Nossa fila de pedidos pendentes
  const pedidos = [
    { id: 101, status: 'pendente' },
    { id: 102, status: 'pendente' },
    { id: 103, status: 'pendente' }
  ];

  pedidos.forEach(function(pedido){
    pedido.status = 'processando';
    enviarParaSistema(pedido);

  })
  console.log(pedidos);