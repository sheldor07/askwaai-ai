"use client"
import VerticalNavbar from "@/components/dashboard/VerticalNavbar";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {  createContext } from "react";

export const UserContext = createContext(null);

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
    <UserContext.Provider value = {user}>
      <VerticalNavbar userEmail={user?.email} />
      {children}
    </UserContext.Provider>
  );
}
