import Mainpage from "./components/mainpage";
import Sidebar from "./components/sidebar";
import DataProvider from "./context";

export default async function Home() {
  const API_KEY = process.env.API_KEY;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  return (
    <DataProvider data={data}>
      <Mainpage />
      <Sidebar />
    </DataProvider>
  );
}
