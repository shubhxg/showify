import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import seriesData from "./data/seriesdata.json";
import { API_BASE_URL } from "./constants/constant";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export default function App() {
  // defined here because its a global state
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);

      console.log(data);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage(`${error}. Please try again later`);
    } finally {
      setIsLoading(false);}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="flex flex-col items-center">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="all-movies">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </section>
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
