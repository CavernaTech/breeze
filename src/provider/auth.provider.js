import { atom, selector } from "recoil";

export const authProvider = atom({
  key: "authProvider",
  default: null,
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
