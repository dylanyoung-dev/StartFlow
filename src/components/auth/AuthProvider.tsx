import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useFirebase } from "../firebase/FirebaseInfo";
import { AuthInfoContext } from "./AuthInfo";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const firebase = useFirebase();
  const auth = getAuth(firebase.application);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);

        router.push("/auth");
      }
      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    // Unsubscribe from the authentication state changes when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <AuthInfoContext.Provider value={{ user, auth }}>
      {loading ? <div>Loading...</div> : children}
    </AuthInfoContext.Provider>
  );
};
