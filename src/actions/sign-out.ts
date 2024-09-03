"use server";

import * as auth from "@/auth";

export async function signOut() {
  return auth.signOut();
}

// import { signOut as nextAuthSignOut } from "next-auth/react";

//   <form
//     action={async () => {
//       await actions.signOut();
//       await nextAuthSignOut({ redirect: false });
//     }}
//   >
