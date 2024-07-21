import Image from "next/image";
import Header from "./header";
import { Play } from "lucide-react";

export default function Inicio() {
  return (
    <main className="flex-1 bg-zinc-900/70 rounded-md p-6 space-y-6">
      <Header />
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
          <div className=" col-span-1 bg-zinc-800/60 hover:bg-zinc-800/90 rounded-md flex justify-between items-center gap-6 text-lg font-semibold cursor-pointer group ">
            <div className="flex items-center gap-6">
              <Image
                className=" rounded-l-sm "
                src={"/soad.jpg"}
                width={60}
                height={60}
                alt=""
              />
              System of A Down
            </div>
            <button className="bg-green-500 p-3 rounded-full mr-3 invisible group-hover:visible">
              <Play fill='bg-black' className="text-black h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
