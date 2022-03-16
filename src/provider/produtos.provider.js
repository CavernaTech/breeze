import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { atom } from "recoil";

const syncProdutosEffect = ({ setSelf }) => {
    getAuth().onAuthStateChanged((cur) => {
      if (cur) {
        onValue(ref(getDatabase(), `users/${cur.uid}/produtos`), (snapshot) => {
          const val = snapshot.val();
          const result = [];
          for (let key in val) {
            result.push(val[key]);
          }
          setSelf(result);
        });
      }
    })
};

export const produtosProvider = atom({
  key: "produtosProvider",
  default: [],
  effects: [syncProdutosEffect],
});
