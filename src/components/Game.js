// Stying and Animation
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import loadDetail from '../actions/detailAction';
import { Link } from 'react-router-dom';

export const Game = ({ name, released, id, image }) => {
  // Load detail handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt="name" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: fill;
  }
`;
