import VerticalNavbar from "@/components/dashboard/VerticalNavbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <VerticalNavbar userEmail={user?.email} />
      {children}
    </>
  );
}
