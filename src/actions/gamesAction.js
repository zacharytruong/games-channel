import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  try {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: popularData.data.results,
        upcomingGames: upcomingData.data.results,
        newGames: newData.data.results
      }
    });
  } catch (err) {
    console.error('Failed to load games', err);
  }
};
