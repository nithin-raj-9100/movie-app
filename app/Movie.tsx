import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return res.results.map((movie: { movie: any }) => ({
    movie: toString(),
  }));
}

const Movie = ({ movie }: { movie: any }) => {
  const { title, id, poster_path } = movie;
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={300}
          height={300}
          // className="p-2"
        />
        <h1 className=" pt-3 text-center font-serif text-xl font-medium text-emerald-300">
          {movie.original_title}
        </h1>
      </Link>
    </>
  );
};

export default Movie;
