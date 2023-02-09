import Image from "next/image";
import Link from "next/link";

type Params = {
  params: {
    movie: string;
  };
};

export default async function MovieDetails({ params }: Params) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 p-3  text-white  dark:bg-black">
        <button className=" mt-24 rounded-md bg-sky-400 px-4 py-1 text-xl  ">
          <Link href="/">Home</Link>
        </button>
        <h2 className="mb-3 flex items-center justify-center font-serif  text-4xl font-medium">
          {res.title}
        </h2>
        <Image
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={620}
          height={620}
          className="h-auto "
          priority
        />
        <h2 className="text-lg"> Released on : {res.release_date}</h2>
        <h2 className="text-lg">Runtime :{res.runtime} minutes</h2>
        <div className="ml-6 inline-flex min-w-fit items-center justify-center rounded-lg bg-green-600 px-3 py-1  text-xl font-medium">
          {res.status}
        </div>
        <div className="max-w-6xl p-3 pb-6 text-center text-xl leading-loose">
          {res.overview}
        </div>
      </div>
    </>
  );
}
