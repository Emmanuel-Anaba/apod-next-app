export default async function fetchAndCache(url = "", revalidate = 3600) {
  const res = await fetch(url, {
    next: { revalidate },
  });
  const data = await res.json();
  return data;
}
