import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { atom, selector, selectorFamily } from "recoil";

const syncCatalogosEffect = ({ setSelf }) => {
  getAuth().onAuthStateChanged((cur) => {
    if (cur) {
      onValue(ref(getDatabase(), `users/${cur.uid}/catalogos`), (snapshot) => {
        const val = snapshot.val() || [];
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

export const catalogosProvider = atom({
  key: "catalogosProvider",
  default: {
    data: [],
    keys: [],
  },
  effects: [syncCatalogosEffect],
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

export const catalogoProviderByCodigo = selectorFamily({
  key: "catalogoProviderByCodigo",
  get:
    (codigo) =>
    ({ get }) => {
      const catalogos = get(catalogosProvider);

      const index = catalogos.keys.indexOf(codigo);

      if (index > -1) {
        return catalogos.data[index];
      }
      return undefined;
    },
});
