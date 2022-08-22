import axios from 'axios';
import { gameDetailsURL, gameScreenshot } from '../api';

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAILS'
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshot(id));
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotData.data
    }
  });
};

export default loadDetail;
