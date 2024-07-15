export default async function fetchAndCache(
  url = "",
  revalidate = 3600,
  date = null
) {
  const dateParam = date ? `&date=${date}` : "";
  const res = await fetch(`${url}${dateParam}`, {
    next: { revalidate },
  });
  const data = await res.json();
  return data;
}
