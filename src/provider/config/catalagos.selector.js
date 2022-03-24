import { selector, selectorFamily } from "recoil";

import { configAtom } from "./config.atom";

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
      console.log(codigo);
      const catalogos = get(catalogosProvider);
      let index = -1;
      try {
        index = catalogos.keys.indexOf(codigo);
        
      } catch (error) {
        console.log('AA', error);
      }

      if (index > -1) {
        return catalogos.data[index];
      }
      return undefined;
    },
});
