import Image from "next/image";
const Loader = () => {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://iili.io/HWVHh3G.jpg"
            fill
            className="animate-pulse object-contain"
          />
        </span>
      </div>
    </div>
  );
}

export default Loader;

