const servicosPedidos = require('./servicoPedidos');
const pedidos = require('./pedidos')

const pedidosProcessando = servicosPedidos.listarPedidosPorStatus(pedidos, 'Processando');

for(let i = 0; i < pedidosProcessando.length; i++){
    console.log('Pedido:', pedidosProcessando[i].id, 'Cliente:', pedidosProcessando[i].cliente, 'Total:', servicosPedidos.calcularTotalPedido(pedidosProcessando[i]));
}


/**Total de todos os pedidos */
const arrayPedidos = pedidos.reduce((acc, valor) => {
    acc += servicosPedidos.calcularTotalPedido(valor)
    return acc;
}, 0)
console.log(arrayPedidos.toFixed(2));