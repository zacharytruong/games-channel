// BASE URL
const base_url = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDate = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

// Curent date/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_IO_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_IO_API}&dates=${currentDate},${nextYear}&ordering=added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_IO_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};

export const upcomingGamesURL = () => {
  return `${base_url}${upcoming_games}`;
};

export const newGamesURL = () => {
  return `${base_url}${new_games}`;
};

// GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_IO_API}`

// GAME SCREENSHOT
export const gameScreenshot = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_IO_API}`