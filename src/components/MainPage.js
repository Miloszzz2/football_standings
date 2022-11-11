/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MainPage() {
  const [leagues, setLeagues] = useState();

  const getData = async () => {
    await axios
      .get('https://api-football-standings.azharimm.dev/leagues')
      .then((response) => {
        setLeagues(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  const parent = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,

        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(leagues);
  return (
    <div className='mainpage'>
      {leagues && (
        <>
          <h1>Select Legaue</h1>
          <motion.div
            className='leagues'
            variants={parent}
            initial='hidden'
            animate='show'
          >
            {leagues.map((data) => {
              if (
                data.name === 'French Ligue 1' ||
                data.name === 'German Bundesliga' ||
                data.name === 'Italian Serie A' ||
                data.name === 'Spanish Primera División' ||
                data.name === 'English Premier League'
              )
                return (
                  <motion.div
                    className='league'
                    variants={item}
                    key={data.name}
                  >
                    <Link to={data.slug}>
                      <img src={data.logos.dark} alt='' />
                    </Link>
                  </motion.div>
                );
            })}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default MainPage;
