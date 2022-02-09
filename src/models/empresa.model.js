const Empresa = {
  fromJSON: ({
    codigo,
    nome,
    clientes,
    estoques,
    fornecedores,
    funcionarios,
    pedidos,
    produtos,
  }) => ({
    codigo,
    nome,
    clientes: clientes || null,
    estoques: estoques || null,
    fornecedores: fornecedores || null,
    funcionarios: funcionarios || [],
    pedidos: pedidos || null,
    produtos: produtos || null,
  }),
};

export default Empresa;
