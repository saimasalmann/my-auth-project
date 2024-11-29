import { SessionWrapper } from "@/app/components/sessionWrapper";
import SignOutPage from "./components/login/SignOutComponent";
 import SignInPage from "./components/login/signInComponent";
import { auth } from "./lib/auth";

export default async function Home() {
  const session = await auth()
   const isAuthenticated = !!session?.user;

  return (


    <SessionWrapper>
    {isAuthenticated
      ? <SignOutPage />
      : <SignInPage />
    }
  </SessionWrapper>
  )}
















//     <div>
//       <SessionWrapper >
//         <SignInPage />
//         <SignOutPage />
//       </SessionWrapper>
//     </div>
//   )
// }
// import { SessionWrapper } from "./components/sessionWrapper";
// import AuthComponent from "./components/login/authComponent";
// import SignOutComponent from "./components/login/SignOutComponent";
// import { auth } from "./lib/auth";

// export default async function Login() {
//   const session = await auth();
//   const isAuthenticated = !!session?.user;

//   return (
//     <div>
//       <SessionWrapper>
//         {isAuthenticated
//           ? <SignOutComponent />
//           : <AuthComponent />
//         }
//       </SessionWrapper>
//     </div>
//   );
// }

// export default function Home() {
//   return <div>Clerk Authentication</div>;
// }