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

  console.log(res);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-6 dark:bg-black">
        <h2 className="flex items-center justify-center font-serif text-3xl font-medium">
          {res.title}
        </h2>
        <h2 className="text-lg"> {res.release_date}</h2>
        <h2>Runtime :{res.runtime} minutes</h2>
        <div className="ml-6 inline-flex min-w-fit items-center justify-center rounded-lg bg-green-600 px-3 py-1  text-xl font-medium">
          {res.status}
        </div>
        <div className="">{res.overview}</div>
      </div>
    </>
  );
}
