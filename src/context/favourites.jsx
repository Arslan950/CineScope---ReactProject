import { useContext, createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext({
  favouritesList: [{
    id: 1,
    title: "",
    poster: "",
    ratings: "",
  }],
  addFavourites: (fav,title) => { },
  removeFavourites: (id) => { },
});

export const FavouritesProvider = ({ children }) => {
  const [favouritesList, setFavouritesList] = useState([]);

  const addFavourites = (fav, title) => {
    setFavouritesList((prev) => [{ id: Date.now(), ...fav }, ...prev]);
  };

  const removeFavourites = (id) => {
    setFavouritesList((prev) => prev.filter((fav) => fav.id !== id));
  };

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites"));
    if (favs && favs.length > 0) {
      setFavouritesList(favs);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouritesList))
  }, [favouritesList])

  const value = { favouritesList, addFavourites, removeFavourites };
  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
}