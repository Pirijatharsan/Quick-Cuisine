/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from '../../redux/features/Favorites/FavoritesSlice'

import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from '../../Utils/LocalStorage'

const HeartIcon = ({ product }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites) || []
  const isFavorite = favorites.some((p) => p._id === product._id)

  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage()
    dispatch(setFavorites(favoritesFromLocalStorage))
  }, [])

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product))
      // remove the product from the localStorage as well
      removeFavoriteFromLocalStorage(product._id)
    } else {
      dispatch(addToFavorites(product))
      // add the product to localStorage as well
      addFavoriteToLocalStorage(product)
    }
  }

  return (
    <div
      className="absolute top-2 right-5 cursor-pointer"
      onClick={toggleFavorites}
    >
      {isFavorite ? (
        <FaHeart className="text-[#D91656]" size={25} />
      ) : (
        <FaRegHeart className="text-white" size={25} />
      )}
    </div>
  )
}

export default HeartIcon
