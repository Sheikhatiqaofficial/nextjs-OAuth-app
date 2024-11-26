// import { SessionWrapper } from "../../components/SessionWrapper";
// import SignInPage from "../../components/login/LogInComponents";
// import SignOutPage from "../../components/login/SignOutComponents";
// import {auth} from "@/app/lib/auth";

// export default async function Home() {
//   const session = await auth()
//   const isAuthenticated  = !!session?.user
//   return(
//     <div>
//       <SessionWrapper>
//         {isAuthenticated ? <SignOutPage/> : <SignInPage/>}
//         <SignInPage/>
//         <SignOutPage/>
//       </SessionWrapper>
//     </div>
//   )
// }


'use client'; 

import { SessionWrapper } from "../../components/SessionWrapper";
import SignInPage from "../../components/login/LogInComponents";
import SignOutPage from "../../components/login/SignOutComponents";
import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  image: string;
}

// Define the structure of the Session object
interface Session {
  user: User;
  expires: string;
}

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch session data from the server on the client side
  useEffect(() => {
    const getSession = async () => {
      const response = await fetch('/api/auth/session');
      const sessionData = await response.json();
      setSession(sessionData);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const isAuthenticated =  session?.user ? true : false;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <SessionWrapper>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">{isAuthenticated ? 'Welcome Back!' : 'Please Sign In'}</h1>
          
          {isAuthenticated ? (
            <SignOutPage />
          ) : (
            <SignInPage />
          )}
        </div>
      </SessionWrapper>
    </div>
  );
}
