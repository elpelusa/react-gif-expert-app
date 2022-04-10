export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=eRmwaPk1zB6Rg3TIko9PGAH21OBZpYI3`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.original.url,
    };
  });

  return gifs;
};
