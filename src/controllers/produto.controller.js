import { useRecoilValue } from "recoil";
import { produtosProviderData, produtoProviderByCodigo } from "../provider/produtos.provider";

import DataRepository from "../repositories/data.repository";

const ref = "produtos/";

const ProdutoController = {
  addProduto: (data) => DataRepository.add(ref, data),
  updateProduto: (codigo, data) => DataRepository.update(ref + codigo, data),
  useProdutos: () => useRecoilValue(produtosProviderData),
  useProdutoByCodigo: (codigo) => useRecoilValue(produtoProviderByCodigo(codigo))
};

export default ProdutoController;
 