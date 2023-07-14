"use client";
import VerticalNavbar from "@/components/dashboard/VerticalNavbar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createContext } from "react";
// Define the user type
type User = {
  id: string;
  email?: string;
  // add any other user properties you expect to have
};

// Now we tell createContext that UserContext can be User or null
export const UserContext = createContext<User | null>(null);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClientComponentClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <UserContext.Provider value={user}>
      <VerticalNavbar userEmail={user?.email} />
      {children}
    </UserContext.Provider>
  );
}
