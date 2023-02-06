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

  // console.log(res);

  return (
    <main
      className={`${firacode.className} h-screen w-screen overflow-x-hidden p-6 font-serif dark:bg-slate-900`}
    >
      <h1 className="flex items-center justify-center p-6 text-6xl uppercase">
        Moviezz
      </h1>

      <div className="grid grid-cols-fluid place-items-baseline gap-16 text-white ">
        {res.results.map((movie: any) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
