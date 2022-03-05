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
        name: auth.displayName,
        phoo: auth.photoURL,
      };
    }
    return {
      name: "",
      photo: "",
    };
  },
});
