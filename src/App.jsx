import Card from "./components/Card";
import Header from "./components/Header";
import seriesData from "./data/seriesdata.json"

export default function App() {
  return (
    <section>
      <Header />
      <div className="card-container flex justify-center flex-wrap gap-8 max-w-full sm:mx-30">
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
