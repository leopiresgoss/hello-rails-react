const RANDOM_MESSAGE = 'RANDOM_MESSAGE';

export default function reducer(state = '', action) {
  switch (action.type) {
    case RANDOM_MESSAGE:
      return action.payload;
    default: return state;
  }
}

// fetch data
const fetchMessages = async () => {
  const res = await fetch('v1/messages');
  return res.json();
};

// action creator
export const getRandomMessage = () => async (dispatch) => {
  const data = await fetchMessages();
  const payload = data[Math.floor(Math.random() * data.length)].greeting;

  dispatch({
    type: RANDOM_MESSAGE,
    payload
  });
}
