import axios from "axios";

export default async function getData() {
  return await axios.get("https://moviesapi.ir/api/v1/movies?page=1");
}

export async function getSelectedGenre(genre_id, page = 1) {
  return await axios.get(
    `https://moviesapi.ir/api/v1/genres/${genre_id}/movies?page=${page}`
  );
}

export async function getSearchValue(name) {
  return await axios.get(
    `https://moviesapi.ir/api/v1/movies?q=${name}&page={page}`
  );
}
