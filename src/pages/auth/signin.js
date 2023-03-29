import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "../../../components/Loader";
import { useSession } from "next-auth/client";

function Signin({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://iili.io/HWVHh3G.jpg"
        height={250}
        width={600}
        className="animate-pulse object-contain"
        alt="alt"
      />
      ;
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button style={{ backgroundColor: "#1db954", color: "white", borderRadius: "9999px", padding: "12px 16px", fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", border: "none", cursor: "pointer" }} onClick={() => Signin(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
