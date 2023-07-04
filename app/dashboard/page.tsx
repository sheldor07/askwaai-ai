import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";

import Link from "next/link";
import VerticalNavbar from "@/components/dashboard/VerticalNavbar";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(cookies);
  return (
    <div className="flex ">
      <VerticalNavbar userEmail={user?.email}/>
      {/* <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm text-foreground">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav> */}
    </div>
  );
}
