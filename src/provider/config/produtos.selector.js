import { selector, selectorFamily } from "recoil";

import { configAtom } from "./config.atom";

export const produtosProvider = selector({
  key: "produtosProvider",
  get: ({ get }) => {
    const data = get(configAtom);
    return data.produtos || { data: [], keys: [] };
  },
});

export const produtosProviderData = selector({
  key: "produtosProviderData",
  get: ({ get }) => {
    const produtos = get(produtosProvider);
    const result = [];
    for (let index = 0; index < produtos.data.length; index++) {
      result.push({
        ...produtos.data[index],
        codigo: produtos.keys[index],
      });
    }
    return result;
  },
});

export const produtosProviderTitle = selector({
  key: "produtosProviderTitle",
  get: ({ get }) => {
    const produtos = get(produtosProvider);
    const result = [];
    for (let index = 0; index < produtos.data.length; index++) {
      result.push({
        codigo: produtos.keys[index],
        title: produtos.data[index].nome,
      });
    }
    return result;
  },
});

export const produtoProviderByCodigo = selectorFamily({
  key: "produtoProviderByCodigo",
  get:
    (codigo) =>
    ({ get }) => {
      const produtos = get(produtosProvider);

      const index = produtos.keys.indexOf(codigo);

      if (index > -1) {
        return produtos.data[index];
      }
      return undefined;
    },
});
