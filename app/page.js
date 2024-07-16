import DarkModeToggler from "./components/darkModeToggler";
import DateInput from "./components/dateInput";
import Mainpage from "./components/mainpage";
import Sidebar from "./components/sidebar";
import DataProvider from "./context";
import fetchAndCache from "./utils/fetchAndCache";
import timeUntilNextMidnight from "./utils/timeUntilNextMidnight";

export default async function Home({ searchParams }) {
  const API_KEY = process.env.API_KEY;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const date = searchParams.date || null;
  const data = await fetchAndCache(apiUrl, timeUntilNextMidnight(), date);

  return (
    <DataProvider data={data}>
      <DarkModeToggler />
      <DateInput />
      <Mainpage />
      <Sidebar />
    </DataProvider>
  );
}
