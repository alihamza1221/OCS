import type { Metadata } from "next";
import { nextAuthOptions } from "./api/auth/[...nextauth]/nextAuth_Options";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import { Providers } from "@/context_Providers/ThemeProvider";
import AuthProvider from "@/context_Providers/NextAuthProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCS",
  description:
    "An online co-working space. Work with friends, or make new ones, whilst working for great productivity, mental health and much more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);
  return (
    <AuthProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} bg-white dark:bg-slate-800 border-box m-0 p-0`}
        >
          <Providers>
            {children}
            <SpeedInsights />
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
