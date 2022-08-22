import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
// Stying and Animation
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Game } from '../components/Game';

function Home() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      {/* {path && <GameDetail />} */}
      <h1>Popular Games</h1>
      <Games>
        {popular &&
          popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
      <h1>Upcoming Games</h1>
      <Games>
        {upcomingGames &&
          upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
      <h1>New Games</h1>
      <Games>
        {newGames &&
          newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h1 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
