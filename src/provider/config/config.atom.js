import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { atom } from "recoil";

const syncConfigEffect = ({ setSelf }) => {
  getAuth().onAuthStateChanged((cur) => {
    if (cur) {
      onValue(ref(getDatabase(), `users/${cur.uid}/config`), (snapshot) => {
        const val = snapshot.val();
        const data = {};
        for (let key in val) {
          const values = [];
          const keys = [];
          for (let index in val[key]) {
            values.push(val[key][index]);
            keys.push(index);
          }
          data[key] = {
            data: values,
            keys: keys,
          };
        }
        setSelf(data);
      });
    }
  });
};

export const configAtom = atom({
  key: "configAtom",
  default: {},
  effects: [syncConfigEffect],
});
