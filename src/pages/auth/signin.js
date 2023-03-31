import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "../../../components/Loader";

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
<button
  className="text-white py-4 px-6 rounded-full transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider"
  style={{
    backgroundColor: "#1db954",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "10px 20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "14px",
    letterSpacing: "2px",
    transition: "all 0.3s ease-out",
  }}

            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
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