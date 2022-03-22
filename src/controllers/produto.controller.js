import { useRecoilValue } from "recoil";
import { produtosProviderData, produtoProviderByCodigo, produtosProviderTitle } from "../provider/produtos.provider";

import DataRepository from "../repositories/data.repository";

const ref = "produtos/";

const ProdutoController = {
  addProduto: (data) => DataRepository.add(ref, data),
  updateProduto: (codigo, data) => DataRepository.update(ref + codigo, data),
  useProdutos: () => useRecoilValue(produtosProviderData),
  useProdutoByCodigo: (codigo) => useRecoilValue(produtoProviderByCodigo(codigo)),
  useProdutosTitle: () => useRecoilValue(produtosProviderTitle),
};

export default ProdutoController;
 