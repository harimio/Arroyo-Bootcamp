export const getData = async (searchText) => {
  const API_KEY = "rHHBI9CJPBptdo9vMBGyRIT61xXU5Yj1";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}`;
  const fetchData = await fetch(url);
  return await fetchData.json();
};
