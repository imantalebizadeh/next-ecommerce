import { auth, signOut } from "@/server/auth";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await auth();

  return (
    <div>
      <p>Hello {session?.user?.name}</p>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <Button>خروج</Button>
      </form>
    </div>
  );
}
