const Fornecedor = {
  fromJSON: ({ cnpj, nome, celular, email, endereco, categoria }) => ({
    cnpj,
    nome,
    celular: celular || null,
    email: email || null,
    endereco: endereco || null,
    categoria: categoria || '💼 Fornecedor',
  }),
};

export default Fornecedor;
