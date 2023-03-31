import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "@/components/Dashboard";
import Loader from "@/components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify V2</title>
        <link rel="icon" href="https://iili.io/HWoR6mu.png" />
      </Head>
      <Dashboard />
    </div>
  );
}