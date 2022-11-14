export default function useFavourite() {
  function setFavouriteMovie(movie: any): void {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }

  function getFavouriteMovie(id: string): {} {
    const output = localStorage.getItem(id);
    return JSON.parse(output as any);
  }

  function removeFromFavourite(id: string): void {
    localStorage.removeItem(id);
  }

  function isFavourited(id: string): boolean {
    const item = localStorage.getItem(id);
    const parseItem = JSON.parse(item as any);

    if (parseItem && Object.keys(parseItem).length > 0) {
      return true;
    }
    return false;
  }

  return {
    setFavouriteMovie,
    getFavouriteMovie,
    removeFromFavourite,
    isFavourited,
  };
}
