import Image from "next/image";
import { Fira_Code } from "@next/font/google";
import Movie from "./Movie";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <main
      className={`${firacode.className} h-screen w-screen overflow-x-hidden p-6 font-serif dark:bg-slate-900`}
    >
      <div className="flex items-center justify-center">
        <h1 className="mb-6 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 px-10 py-4 text-6xl uppercase text-black">
          Moviezz
        </h1>
      </div>

      <div className="grid grid-cols-fluid place-items-baseline gap-16 text-white ">
        {res.results.map((movie: any) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
