import { useRecoilValue, useSetRecoilState } from "recoil";
import { authProvider, authProviderStatus } from "../provider/auth.provider";

import AuthenticationRepository from "../repositories/authentication.repository";

const AuthenticationController = {
  login: AuthenticationRepository.login,
  logout: AuthenticationRepository.logout,
  useAuthentication: () => useRecoilValue(authProvider),
  useAuthenticationStatus: () => useRecoilValue(authProviderStatus),
  useAuthenticationSync: () =>
    AuthenticationRepository.sessionListen(useSetRecoilState(authProvider)),
};

export default AuthenticationController;
