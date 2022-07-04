import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessage } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch()
  const greeting = useSelector((state) => state.greeting)

  useEffect(() => {
    if (greeting === '') {
      dispatch(getRandomMessage()); 
    }
  }, [])

  return (
   <div>
    Greeting: {greeting}
   </div> 
  );
}

export default Greeting
