const Produto = {
  fromJSON: ({ codigo, nome, valor, quantidade, tipo, categoria }) => ({
    codigo,
    nome,
    valor: valor,
    quantidade: quantidade || null,
    tipo: tipo || 'unitário',
    categoria: categoria || '🎈 Item',
  }),
};

export default Produto;
