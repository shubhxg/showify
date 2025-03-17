import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import seriesData from "./data/seriesdata.json"
import { useState } from "react";

export default function App() {
  // defined here because its a global state
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="flex flex-col items-center">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <div className="card-container flex justify-center flex-wrap gap-6 max-w-full sm:mx-30">
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
