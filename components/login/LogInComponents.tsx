// 'use client';

// import { signIn } from "next-auth/react";
// export default function SignInPage() {
//     return (
//         <div>
//             <h1>...Sign In...</h1>
//             <button onClick={() => signIn('github')}>Sign In with GitHub</button>
//         </div>
//     )
// }
'use client';

import { signIn } from "next-auth/react";

export default function SignInPage() {
    return (
        <div className="flex justify-center items-center flex-col">
           
            <button 
                onClick={() => signIn('github')} 
                className="text-2xl mb-4 font-bold"
            >
                Sign In with GitHub
            </button>
        </div>
    )
}
