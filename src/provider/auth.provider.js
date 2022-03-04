import { atom, selector } from 'recoil';

export const authProvider = atom({
    key: 'authProvider',
    default: null
});

export const authProviderStatus = selector({
  key: 'authProviderStatus',
  get: ({get}) => {
    const auth = get(authProvider);
    return auth !== null;
  }
})

