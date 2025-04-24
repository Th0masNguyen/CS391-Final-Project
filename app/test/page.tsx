import getRandomMovies from "@/lib/getRandomMovies";

export default async function Home() {
  const x = await getRandomMovies();
  console.log(x);

  return (
    <main className="">
      <ol className="list-decimal ml-6">
        {x.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
    </main>
  );
}
