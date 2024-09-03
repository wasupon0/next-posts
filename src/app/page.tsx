import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
      {session?.user ? (
        <div className="bg-purple-200">{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
      <Profile />
    </div>
  );
}
