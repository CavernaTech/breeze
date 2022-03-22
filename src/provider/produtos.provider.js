import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { atom, selector, selectorFamily } from "recoil";

const syncProdutosEffect = ({ setSelf }) => {
  getAuth().onAuthStateChanged((cur) => {
    if (cur) {
      onValue(ref(getDatabase(), `users/${cur.uid}/produtos`), (snapshot) => {
        const val = snapshot.val();
        const data = [];
        const keys = [];
        for (let key in val) {
          data.push(val[key]);
          keys.push(key);
        }
        setSelf({
          data,
          keys,
        });
      });
    }
  });
};

export const produtosProvider = atom({
  key: "produtosProvider",
  default: {
    data: [],
    keys: [],
  },
  effects: [syncProdutosEffect],
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
