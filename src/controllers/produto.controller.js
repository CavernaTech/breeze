import { useRecoilValue, useSetRecoilState } from "recoil";
import { produtosProvider } from "../provider/produtos.provider";

import DataRepository from "../repositories/data.repository";

const ref = "produtos/";

const ProdutoController = {
  addProduto: (data) => DataRepository.add(ref, data),
  updateProduto: (id, data) => DataRepository.update(ref + id, data),
  useProdutos: () => useRecoilValue(produtosProvider),
  useProdutosSync: () =>
    DataRepository.dataListen(ref, useSetRecoilState(produtosProvider)),
};

export default ProdutoController;
