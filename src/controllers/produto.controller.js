import { useRecoilValue } from "recoil";
import { produtosProvider } from "../provider/produtos.provider";

import DataRepository from "../repositories/data.repository";

const ref = "produtos/";

const ProdutoController = {
  addProduto: (data) => DataRepository.add(ref, data),
  updateProduto: (id, data) => DataRepository.update(ref + id, data),
  useProdutos: () => useRecoilValue(produtosProvider),
};

export default ProdutoController;
 