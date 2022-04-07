import { selector, selectorFamily } from "recoil";

import { configAtom } from "./config.atom";
import { produtosProvider } from "./produtos.selector";

export const catalogosProvider = selector({
  key: "catalogosProvider",
  get: ({ get }) => {
    const data = get(configAtom);
    return data.catalogos || { data: [], keys: [] };
  },
});

export const catalogosProviderData = selector({
  key: "catalogosProviderData",
  get: ({ get }) => {
    const catalogos = get(catalogosProvider);
    const result = [];
    for (let index = 0; index < catalogos.data.length; index++) {
      result.push({
        ...catalogos.data[index],
        codigo: catalogos.keys[index],
      });
    }
    return result;
  },
});

export const catalogosProviderTitle = selector({
  key: "catalogosProviderTitle",
  get: ({ get }) => {
    const catalogos = get(catalogosProvider);
    const result = [];
    for (let index = 0; index < catalogos.data.length; index++) {
      result.push({
        codigo: catalogos.keys[index],
        title: catalogos.data[index].nome,
      });
    }
    return result;
  },
});

export const catalogoProviderByCodigo = selectorFamily({
  key: "catalogoProviderByCodigo",
  get:
    (codigo) =>
    ({ get }) => {
      const catalogos = get(catalogosProvider);
      let index = -1;
      try {
        index = catalogos.keys.indexOf(codigo);
      } catch (error) {
        console.log("AA", error);
      }

      if (index > -1) {
        return catalogos.data[index];
      }
      return undefined;
    },
});

export const catalogosProviderProdutos = selector({
  key: "catalogosProviderProdutos",
  get: ({ get }) => {
    const catalogos = get(catalogosProvider);
    const produtos = get(produtosProvider);
    const result = [];
    for (let index = 0; index < catalogos.data.length; index++) {
      const catalogo = {
        ...catalogos.data[index],
        codigo: catalogos.keys[index],
      };
      if (catalogo.subcategorias) {
        catalogo.subcategorias = catalogo.subcategorias.map((sub) => ({
          ...sub,
          produtos: sub.produtos
            ? sub.produtos.map(
                (codigo) =>
                  produtos.data[produtos.keys.indexOf(codigo)] || undefined
              )
            : [],
        }));
      }
      result.push(catalogo);
    }
    return result;
  },
});
