const Pedido = {
  fromJSON: ({
    inicio,
    fim,
    abertura,
    fechamento,
    cliente,
    fornecedor,
    produtos,
    valor,
    desconto,
    tipo,
    processo,
    etapas,
    concluido,
  }) => ({
    inicio,
    fim: fim || null,
    abertura: abertura || null,
    fechamento: fechamento || null,
    cliente: cliente || null,
    fornecedor: fornecedor || null,
    produtos: produtos || null,
    valor: valor || null,
    desconto: desconto || null,
    tipo: tipo || 'saida', // saida=Diminuir Estoque, entrada=Aumentar
    processo: processo || '💰 Venda',
    etapas: etapas || ['Pedido Aberto'],
    concluido: concluido || null, // null=Não, f=Cancelado, t=Sim 
  }),
};

export default Pedido;
