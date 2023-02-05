import Image from "next/image";
import { Fira_Code } from "@next/font/google";
import Movie from "./about/Movie";

("https://api.themoviedb.org/3/movie/popular?");

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  console.log(res);

  return (
    <main className={firacode.className}>
      <h1 className="text-3xl">Hello NEXT 13 🔥</h1>
      {res.results.map((m: any) => (
        <Movie m={m} />
      ))}
    </main>
  );
}
