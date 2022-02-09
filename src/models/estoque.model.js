const Estoque = {
  fromJSON: ({
    codigo,
    nome,
    produto,
    total,
    fornecedor,
    quantidades,
    tipo,
    categoria,
  }) => ({
    codigo,
    nome,
    produto,
    total,
    fornecedor: fornecedor || null,
    quantidades: quantidades || null,
    tipo: tipo || 'unico',
    categoria: categoria || '🎈 Item',
  }),
};

export default Estoque;
