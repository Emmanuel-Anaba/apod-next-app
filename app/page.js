import Mainpage from "./components/mainpage";
import Sidebar from "./components/sidebar";
import DataProvider from "./context";
import fetchAndCache from "./utils/fetchAndCache";
import timeUntilNextMidnight from "./utils/timeUntilNextMidnight";

export default async function Home() {
  const API_KEY = process.env.API_KEY;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const data = await fetchAndCache(apiUrl, timeUntilNextMidnight());

  return (
    <DataProvider data={data}>
      <Mainpage />
      <Sidebar />
    </DataProvider>
  );
}
