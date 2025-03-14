import Card from "./components/Card";
import seriesData from "./data/seriesdata.json"

export default function App() {
  return (
    <section>
      <header className="text-center max-w-full my-24">
        <h1 className="mt-8 text-5xl tracking-tighter font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Showify!
          </span>
        </h1>
        <h6 className="mt-4 text-lg font-regular text-gray-500">
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
