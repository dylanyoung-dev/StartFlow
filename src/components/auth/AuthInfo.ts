import { Auth, User } from "@firebase/auth";
import { createContext, useContext } from "react";

export interface IAuthInfo {
  user: User | undefined;
  auth: Auth | undefined;
}

export const AuthInfoContext = createContext<IAuthInfo>({} as IAuthInfo);

export const useAuth = () => useContext(AuthInfoContext);
