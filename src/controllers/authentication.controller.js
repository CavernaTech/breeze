import { useRecoilValue } from "recoil";
import {
  authProvider,
  authProviderInfo,
  authProviderStatus,
} from "../provider/auth.provider";

import AuthenticationRepository from "../repositories/authentication.repository";

const AuthenticationController = {
  login: AuthenticationRepository.login,
  logout: AuthenticationRepository.logout,
  useAuthentication: () => useRecoilValue(authProvider),
  useAuthenticationStatus: () => useRecoilValue(authProviderStatus),
  useAuthenticationInfo: () => useRecoilValue(authProviderInfo),
};

export default AuthenticationController;
