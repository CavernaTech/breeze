import { selector, selectorFamily } from "recoil";

import { configAtom } from "./config.atom";

export const clientesProvider = selector({
  key: "clientesProvider",
  get: ({ get }) => {
    const data = get(configAtom);
    return data.clientes || { data: [], keys: [] };
  },
});

export const clientesProviderData = selector({
  key: "clientesProviderData",
  get: ({ get }) => {
    const clientes = get(clientesProvider);
    const result = [];
    for (let index = 0; index < clientes.data.length; index++) {
      result.push({
        ...clientes.data[index],
        codigo: clientes.keys[index],
      });
    }
    return result;
  },
});

export const clientesProviderTitle = selector({
  key: "clientesProviderTitle",
  get: ({ get }) => {
    const clientes = get(clientesProvider);
    const result = [];
    for (let index = 0; index < clientes.data.length; index++) {
      result.push({
        codigo: clientes.keys[index],
        title: clientes.data[index].nome,
      });
    }
    return result;
  },
});

export const clienteProviderByCodigo = selectorFamily({
  key: "clienteProviderByCodigo",
  get:
    (codigo) =>
    ({ get }) => {
      const clientes = get(clientesProvider);

      const index = clientes.keys.indexOf(codigo);

      if (index > -1) {
        return clientes.data[index];
      }
      return undefined;
    },
});
