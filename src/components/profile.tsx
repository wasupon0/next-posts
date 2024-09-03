"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div className="bg-green-400">
        From client: {JSON.stringify(session.data.user)}
      </div>
    );
  }

  return <div>From client: user is NOT signed in</div>;
}
