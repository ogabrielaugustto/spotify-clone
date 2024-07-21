import { House, Library, Plus, Search } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-72 gap-2">
      <nav className="flex flex-col ">
        <div className="bg-zinc-900/70 rounded-md p-4 space-y-5">
          <a
            className="flex items-center gap-4 font-semibold hover:text-white"
            href=""
          >
            <House />
            Inicio
          </a>
          <a
            className="flex items-center gap-4 font-semibold hover:text-white"
            href=""
          >
            <Search />
            Buscar
          </a>
        </div>
      </nav>
      <div className="bg-zinc-900/70 rounded-md p-4 flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <a
            className="flex items-center gap-4 font-semibold hover:text-white"
            href=""
          >
            <Library />
            Sua Biblioteca
          </a>
          <Plus />
        </div>
        <div className="flex justify-start items-center gap-2 text-sm font-semibold mt-4">
          <button className="bg-zinc-800/80 hover:bg-zinc-800 rounded-full px-3 py-1">
            Playlists
          </button>
          <button className="bg-zinc-800/80 hover:bg-zinc-800 rounded-full px-3 py-1">
            Artistas
          </button>
          <button className="bg-zinc-800/80 hover:bg-zinc-800 rounded-full px-3 py-1">
            Álbuns
          </button>
        </div>
        <nav className="flex flex-1 flex-col">
          <a href="" className=" hover:bg-zinc-800 p-1 rounded-md">
            <div className="flex gap-2">
              <Image
                src={"/soad.jpg"}
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
              <div>
                <p className="text-white">System of A Down</p>
                <p className="text-sm">Playlist • Spotify</p>
              </div>
            </div>
          </a>
          <a href="" className=" hover:bg-zinc-800 p-1 rounded-md">
            <div className="flex gap-2">
              <Image
                src={"/Audioslave.jpg"}
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
              <div>
                <p className="text-white">Audioslave</p>
                <p className="text-sm">Playlist • Spotify</p>
              </div>
            </div>
          </a>
          <a href="" className=" hover:bg-zinc-800 p-1 rounded-md">
            <div className="flex gap-2">
              <Image
                src={"/black-sabbath.jpg"}
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
              <div>
                <p className="text-white">Black Sabbath</p>
                <p className="text-sm">Playlist • Spotify</p>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </aside>
  );
}
