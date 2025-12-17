import { createContext, use, type PropsWithChildren } from 'react';

import { resetNumberAnswered, resetPoints } from '../use-questions';
import { useStorageState } from '../use-storage-state';

const AuthContext = createContext<{
  signIn: (nome:string, email:string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// Use this hook to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext
      value={{
        signIn: (nome:string, email:string) => {
          // Perform sign-in logic here
          setSession(JSON.stringify({nome, email}));
        },
        signOut: () => {
          resetNumberAnswered();
          resetPoints();
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext>
  );
}