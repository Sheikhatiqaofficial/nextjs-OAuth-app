// 'use client';

// import { signOut } from "next-auth/react";
// export default function SignOutPage() {
//     return (
//         <div>
//             <h1>...Sign Out...</h1>
//             <button onClick={() => signOut()}>Sign out from GitHub</button>
//         </div>
//     )
// }
'use client';

import { signOut } from "next-auth/react";

export default function SignOutPage() {
    return (
        <div className="flex justify-center items-center flex-col">
            
            <button 
                onClick={() => signOut()} 
                className="text-2xl mb-4 font-bold"
            >
                Sign out from GitHub
            </button>
        </div>
    )
}
