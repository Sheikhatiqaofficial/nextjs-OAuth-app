// import { SessionProvider } from "next-auth/react";
// // import { Children } from "react";

// export const SessionWrapper = ({children}: {children:React.ReactNode}) => {
    
//     return <SessionProvider>{children}</SessionProvider>;
// };

import { SessionProvider } from "next-auth/react";

export const SessionWrapper = ({children}: {children: React.ReactNode}) => {
    return <SessionProvider>{children}</SessionProvider>;
};
