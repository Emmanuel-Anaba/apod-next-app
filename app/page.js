import DataProvider from "./context";

export default function Home() {
  const data = {};
  return <DataProvider data={data}>HomePage</DataProvider>;
}
