import getRandomMovies from "@/lib/getRandomMovies";
import getImage from "@/lib/getImage";

export default async function Home() {
  const x = await getRandomMovies();
  const chosenOne = x[0];
  const chosenImg = await getImage(chosenOne.id);

  return (
    <main className="">
      <ol className="list-decimal ml-6">
        {x.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
      <p>chosen one : {chosenOne.title}</p>
      <img src={chosenImg || ""} alt="random image" />
    </main>
  );
}
