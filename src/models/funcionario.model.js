const Funcionario = {
  fromJSON: ({ cpf, nome, nascimento, celular, email, endereco, categoria }) => ({
    cpf,
    nome,
    nascimento,
    celular: celular || null,
    email: email || null,
    endereco: endereco || null,
    categoria: categoria || '👩‍💼 Vendedor',
  }),
};

export default Funcionario;
