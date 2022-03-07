const Estoque = {
  fromJSON: ({
    codigo,
    nome,
    produto,
    total,
    entrada,
    saida,
    pedido,
    fornecedor,
    movimentacoes, // rastreamento do conteúdo do estoque, ID, Data, Valor, Pedido
    tipo,
    categoria,
  }) => ({
    codigo,
    nome,
    produto,
    total,
    entrada,
    saida: saida || null,
    pedido,
    fornecedor: fornecedor || null,
    movimentacoes: movimentacoes || [],
    tipo: tipo || 'unico',
    categoria: categoria || '🎈 Item',
  }),
};

export default Estoque;
