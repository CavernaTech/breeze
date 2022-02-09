const Cliente = {
  fromJSON: ({ cpf, nome, nascimento, celular, email, endereco, categoria }) => ({
    cpf,
    nome,
    nascimento,
    celular: celular || null,
    email: email || null,
    endereco: endereco || null,
    categoria: categoria || '🙋‍♂️ Cliente',
  }),
};

export default Cliente;
