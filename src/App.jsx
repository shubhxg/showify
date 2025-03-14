import Card from "./components/Card";
import seriesData from "./data/seriesdata.json"

export default function App() {
  return (
    <section>
      <header className="max-w-full py-8 flex flex-col items-center text-center">
        <img src="/hero.png" alt="Hero Banner Image" className="sm:w-108 w-54" />
        <h1 className="sm:mt-2 sm:text-5xl text-3xl tracking-tighter font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-500 to-red-400 bg-clip-text text-transparent animate-gradient-text">
            Showify!
          </span>
        </h1>
        <h6 className="mt-4 sm:text-lg text-md px-4 font-regular text-gray-500">
          A place to find your next watch recommendation based on what you last
          watched.
        </h6>
        <br />
      </header>
      <div className="card-container flex justify-center flex-wrap gap-4 max-w-full sm:mx-30">
        {seriesData.map((series) => {
          return (
            // passing the props to the card component
            <Card
              key={series.id}
              rating={series.seriesRating}
              imgSource={series.imgSource}
              name={series.seriesName}
              isNerdy={series.isNerdy}
            />
          );
        })}
      </div>
    </section>
  );
}
