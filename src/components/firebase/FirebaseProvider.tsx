import { firebaseConfig } from "@/firebase/config";
import { initializeApp } from "firebase/app";
import { FC } from "react";
import { FirebaseInfoContext } from "./FirebaseInfo";

interface FirebaseProviderProps {
  children: React.ReactNode;
}

const app = initializeApp(firebaseConfig);

export const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  return (
    <FirebaseInfoContext.Provider value={{ application: app }}>
      {children}
    </FirebaseInfoContext.Provider>
  );
};
