import { FirebaseApp } from "firebase/app";
import { createContext, useContext } from "react";

export interface IFirebaseInfo {
  application: FirebaseApp | undefined;
}

export const FirebaseInfoContext = createContext<IFirebaseInfo>(
  {} as IFirebaseInfo
);

export const useFirebase = () => useContext(FirebaseInfoContext);
