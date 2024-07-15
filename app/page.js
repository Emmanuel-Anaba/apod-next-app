import DataProvider from "./context";

export default function Home() {
  const data = {
    copyright: "Juergen Stein",
    date: "2024-07-11",
    explanation:
      "Globular star cluster Omega Centauri packs about 10 million stars much older than the Sun into a volume some 150 light-years in diameter. Also known as NGC 5139, at a distance of 15,000 light-years it's the largest and brightest of 200 or so known globular clusters that roam the halo of our Milky Way galaxy. Though most star clusters consist of stars with the same age and composition, the enigmatic Omega Cen exhibits the presence of different stellar populations with a spread of ages and chemical abundances. In fact, Omega Cen may be the remnant core of a small galaxy merging with the Milky Way. With a yellowish hue, Omega Centauri's red giant stars are easy to pick out in this sharp telescopic view. A two-decade-long exploration of the dense star cluster with the Hubble Space Telescope has revealed evidence for a massive black hole near the center of Omega Centauri.",
    hdurl: "https://apod.nasa.gov/apod/image/2407/NGC5139_Stein_a2048.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Globular Cluster Omega Centauri",
    url: "https://apod.nasa.gov/apod/image/2407/NGC5139_Stein_a1024.jpg",
  };

  return <DataProvider data={data}>HomePage</DataProvider>;
}
