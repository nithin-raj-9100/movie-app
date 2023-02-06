import Link from "next/link";
import Image from "next/image";

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
        <h1 className="ho pt-3 text-center text-lg text-emerald-300">
          {movie.original_title}
        </h1>
      </Link>
    </>
  );
};

export default Movie;
