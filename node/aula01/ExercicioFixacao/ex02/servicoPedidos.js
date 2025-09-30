function calcularTotalPedido(pedido){
    const valorTotal = pedido.itens.reduce((acc, itemPedido) => {
        acc += (itemPedido.precoUnitario * itemPedido.quantidade)
        return acc;
    }, 0)
    return valorTotal;
}

function listarPedidosPorStatus(listaPedidos, status){
    return listaPedidos.filter(pedido => pedido.status === status)
}

module.exports = {
    calcularTotalPedido: calcularTotalPedido,
    listarPedidosPorStatus: listarPedidosPorStatus
}