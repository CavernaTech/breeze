import { getAuth } from "firebase/auth";
import { atom, selector } from "recoil";

const syncAuthEffect = ({ setSelf }) => getAuth().onAuthStateChanged(setSelf);

export const authProvider = atom({
  key: "authProvider",
  default: null,
  effects: [syncAuthEffect],
});

export const authProviderStatus = selector({
  key: "authProviderStatus",
  get: ({ get }) => {
    const auth = get(authProvider);
    return auth !== null;
  },
});

export const authProviderInfo = selector({
  key: "authProviderInfo",
  get: ({ get }) => {
    const auth = get(authProvider);
    if (auth !== null) {
      return {
        uid: auth.uid,
        name: auth.displayName,
        photo: auth.photoURL,
      };
    }
    return {
      uid: null,
      name: "",
      photo: "",
    };
  },
});
